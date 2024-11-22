function setOutputText(text) {  
    document.getElementById('outputText').value = text;  
}  
  
function xmlToJson(xmlDoc) {
    const properties = xmlDoc.getElementsByTagName('PROPERTIES')[0] ?? throwError("No <PROPERTIES> tag found in XML.");
    return JSON.stringify({
        data: Array.from(properties.getElementsByTagName('VALUE'))
            .map(value => ({ w: value.getAttribute('name'), p: value.getAttribute('val') }))
            .filter(({ w, p }) => w && p)
    }, null, 4);
} 
  
function jsonToXml(json) {
    return [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<PROPERTIES>',
        ...json.data.map(({ w, p }) => `<VALUE name="${w}" val="${p}"/>`),
        '</PROPERTIES>'
    ].join('\n');
}
  
function csvToJson(csvText, delimiter = ',') {
    return JSON.stringify({
        data: csvText.split(/\r\n|\n/).map(line => {
            const [w, p] = line.split(delimiter).map(s => s.trim());
            return { w, p } && { w, p } || null;
        }).filter(Boolean)
    }, null, 4);
}
  
function tryParseXml(inputText) {
    const xmlDoc = new DOMParser().parseFromString(inputText, "text/xml");
    return xmlDoc.getElementsByTagName("parsererror").length === 0 ? xmlDoc : null;
}

function throwError(message) {
    throw new Error(message);
} 
  
function convert(inputText) {
    try {
        setOutputText(jsonToXml(JSON.parse(inputText)));
    } catch (e1) {
        let xmlDoc = tryParseXml(inputText);
        if (xmlDoc) {
            setOutputText(xmlToJson(xmlDoc));
        } else {
            const csvDelimiter = /,(?![^"]*"(?:(?:\\")*[^"]*)*$)/g.test(inputText) ? ',' : '\t';
            try {
                setOutputText(csvToJson(inputText, csvDelimiter));
            } catch (e2) {
                setOutputText('Input cannot be parsed as JSON, XML, or CSV.');
            }
        }
    }
}  

function uploadAndConvert() {
    const file = document.getElementById('fileInput').files[0];
    const inputText = document.getElementById('inputText').value.trim();
    if (!file && !inputText) setOutputText('Please select a file to upload or enter text.');

    if (file) {
        const { name, type } = file;
        const ext = type.split('/').pop().toLowerCase() || name.split('.').pop().toLowerCase();
        if (!['json', 'xml', 'csv'].includes(ext)) return setOutputText('Unsupported file type. Please upload a JSON, XML or CSV file.');

        const reader = new FileReader();
        reader.onload = e => {
            convert(e.target.result);
            document.getElementById('inputText').value = e.target.result;
        };
        reader.readAsText(file);
    } else {
        convert(inputText);
    }
}
  
function downloadResult() {
    const outputText = document.getElementById('outputText').value;
    const [fileType,fileExtension] = outputText.startsWith('{') && outputText.endsWith('}') ? ['application/json','json'] :
                     outputText.startsWith('<') && outputText.endsWith('>') ? ['application/xml','xml'] :
                     ['text/plain','txt'];
    const blob = new Blob([outputText], { type: fileType });
    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = `${(document.getElementById('fileInput').files[0]?.name.split('.')[0] || 'converted')}_${fileExtension}`;
    downloadLink.click();
    URL.revokeObjectURL(downloadLink.href);
}