function output(text) {document.getElementById('outputText').value = text}  
function xmlToJson(input) {
    const xml = new DOMParser().parseFromString(input, "text/xml");
    const prop = xml.getElementsByTagName('PROPERTIES')[0] || null;
    return prop ? JSON.stringify({
        data: Array.from(prop.getElementsByTagName('VALUE'))
            .map(value => ({ w: value.getAttribute('name'), p: value.getAttribute('val') }))
            .filter(({ w, p }) => w && p)
    }, null, 4) : null
} 
function jsonToXml(json) {
    return [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<PROPERTIES>',
        ...json.data.map(({ w, p }) => `<VALUE name="${w}" val="${p}"/>`),
        '</PROPERTIES>'
    ].join('\n')
}
function csvToJson(csv, delim) {
    return JSON.stringify({
        data: csv.split(/[\r\n]+/).map(line => {
            const [w, p] = line.split(delim).map(s => s.trim());
            return { w, p };
        }).filter(({ w, p }) => w && p)
    }, null, 4)
}
function convert(input) {
    try {output(jsonToXml(JSON.parse(input)))} catch (e1) {
        try {output(xmlToJson(input))} catch (e2) {output(csvToJson(input, /,(?![^"]*"(?:(?:\\")*[^"]*)*$)/.test(input) ? ',' : '\t'))}
    }
}  
function uploadAndConvert() {
    const file = document.getElementById('fileInput').files[0];
    const inputText = document.getElementById('inputText').value.trim();
    if (!file && !inputText) {return output('Please select a file to upload or enter text.')}
    else if (file && /\.(?:json|xml|csv)$/.test(file.name.toLowerCase())) {
        const reader = new FileReader();
        reader.onload = e => {convert(e.target.result); document.getElementById('inputText').value=e.target.result}; 
        reader.readAsText(file)
    } else if (inputText) {convert(inputText)} else {return output('Unsupported file type. Please upload a JSON, XML or CSV file.')}
}
function downloadResult() {
    const outputText = document.getElementById('outputText').value;
    const fileType = outputText.startsWith('{') ? 'application/json' : outputText.startsWith('<') ? 'application/xml' : 'text/plain';
    const blob = new Blob([outputText], { type: fileType });
    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = `${(document.getElementById('fileInput').files[0]?.name.split('.')[0] || 'converted')}`;
    downloadLink.click();
    URL.revokeObjectURL(downloadLink.href)
}