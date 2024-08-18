function setOutputText(text) {  
    document.getElementById('outputText').value = text;  
}  
  
function xmlToJson(xmlDoc) {  
    const properties = xmlDoc.getElementsByTagName('PROPERTIES')[0];  
    if (!properties) throw new Error("No <PROPERTIES> tag found in XML.");  
    return JSON.stringify({  
        data: Array.from(properties.getElementsByTagName('VALUE'))  
            .map(value => ({  
                w: value.getAttribute('name'),  
                p: value.getAttribute('val')  
            }))  
            .filter(obj => obj.w && obj.p)  
    }, null, 4);  
}  
  
function jsonToXml(json) {  
    return [  
        '<?xml version="1.0" encoding="UTF-8"?>',  
        '<PROPERTIES>',  
        ...json.data.map(item => `<VALUE name="${item.w}" val="${item.p}"/>`),  
        '</PROPERTIES>'  
    ].join('\n');  
}  
  
function csvToJson(csvText, delimiter = ',') {    
    return JSON.stringify({  
        data: csvText.split(/\r\n|\n/).map(line => {  
            const [w, p] = line.split(delimiter).map(s => s.trim());  
            return w && p ? { w, p } : null;  
        }).filter(Boolean)  
    }, null, 4);  
}  
  
function tryParseXml(inputText) {  
    const xmlDoc = new DOMParser().parseFromString(inputText, "text/xml");  
    return xmlDoc.getElementsByTagName("parsererror").length === 0 ? xmlDoc : null;  
}  
  
function convert(inputText) {   
    try {  
        const jsonObj = JSON.parse(inputText);  
        setOutputText(jsonToXml(jsonObj));  
    } catch (e) {  
        let xmlDoc = tryParseXml(inputText);  
        if (xmlDoc) {  
            setOutputText(xmlToJson(xmlDoc));  
        } else {  
            const csvDelimiter = /,(?![^"]*"(?:(?:\\")*[^"]*)*$)/g.test(inputText) ? ',' : '\t';  
            try {  
                setOutputText(csvToJson(inputText, csvDelimiter));  
            } catch (e) {  
                setOutputText('Input cannot be parsed as JSON, XML, or CSV.');  
            }  
        }  
    }  
}  
  
function uploadAndConvert() {  
    const file = document.getElementById('fileInput').files[0];  
    const inputText = document.getElementById('inputText').value.trim()
    if (!file && !inputText) {  
        setOutputText('Please select a file to upload or enter text.');  
        return;  
    }  
    if (file) {  
        const fileExtension = file.name.split('.').pop().toLowerCase();  
        if (!['json', 'xml', 'csv'].includes(fileExtension)) {  
            setOutputText('Unsupported file type. Please upload a JSON, XML or CSV file.');  
            return;  
        }  
        const reader = new FileReader();  
        reader.onload = e => {convert(e.target.result); document.getElementById('inputText').value=e.target.result;}; 
        reader.readAsText(file);  
    } else {  
        convert(inputText);  
    }  
}
  
function downloadResult() {  
    const outputText = document.getElementById('outputText').value;  
    const fileType = outputText.startsWith('{') && outputText.endsWith('}') ? 'application/json' :  
                     outputText.startsWith('<') && outputText.endsWith('>') ? 'application/xml' :  
                     'text/plain';  
    const fileExtension = fileType === 'application/json' ? 'json' :  
                          fileType === 'application/xml' ? 'xml' :  
                          'txt';
    const blob = new Blob([outputText], { type: fileType });     
    const downloadLink = document.createElement('a');  
    downloadLink.href = URL.createObjectURL(blob);  
    downloadLink.download = `converted_${fileExtension}`;   
    downloadLink.click();  
    URL.revokeObjectURL(downloadLink.href);
}