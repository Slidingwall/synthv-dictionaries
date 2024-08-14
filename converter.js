function setOutputText(text) {  
    document.getElementById('outputText').value = text;  
}

function xmlToJson(xmlDoc) {  
    const properties = xmlDoc.getElementsByTagName('PROPERTIES')[0];  
    if (!properties) {  
        throw new Error("No <PROPERTIES> tag found in XML.");  
    }  
    const values = properties.getElementsByTagName('VALUE');  
    const jsonData = Array.from(values).map(value => {  
        const name = value.getAttribute('name');  
        const val = value.getAttribute('val');  
        if (name && val) {  
            return { w: name, p: val };  
        }  
        console.warn("Missing 'name' or 'val' attribute in <VALUE> tag.");  
        return null; 
    }).filter(obj => obj !== null); 
    return JSON.stringify({ data: jsonData }, null, 4);  
}

function jsonToXml(json) {  
    const xml = ['<?xml version="1.0" encoding="UTF-8"?>', '<PROPERTIES>'];  
    json.data.forEach(item => {  
        const name = item.w;  
        const val = item.p;  
        xml.push(`<VALUE name="${name}" val="${val}"/>`);  
    });  
    xml.push('</PROPERTIES>');  
    return xml.join('\n');  
}  

function csvToJson(csvText, delimiter = ',') {  
    const lines = csvText.split(/\r\n|\n/);  
    const result = [];  
    for (let i = 0; i < lines.length; i++) {  
        const values = lines[i].split(delimiter);  
        if (values.length >= 2) {   
            const obj = {  
                w: values[0].trim(), 
                p: values[1].trim()   
            };  
            result.push(obj);  
        }  
    }  
    return JSON.stringify({ data: result }, null, 4);  
}  
 
function tryParseXml(inputText) {  
    const xmlDoc = new DOMParser().parseFromString(inputText, "text/xml");  
    if (xmlDoc.getElementsByTagName("parsererror").length === 0) {  
        return xmlDoc;  
    }  
    return null;  
}  
  
function convert() {  
    const inputText = document.getElementById('inputText').value;  
    if (!inputText) {  
        setOutputText('Input cannot be empty.');  
        return;  
    }  
    let jsonObj;  
    try {  
        jsonObj = JSON.parse(inputText);  
        setOutputText(jsonToXml(jsonObj));  
        return;  
    } catch (e) {}  
    let xmlDoc = tryParseXml(inputText);  
    if (xmlDoc) {  
        setOutputText(xmlToJson(xmlDoc));  
        return;  
    }  
    const csvDelimiter = /,(?![^"]*"(?:(?:\\")*[^"]*)*$)/g.test(inputText) ? ',' : '\t';  
    let csvJson;  
    try {  
        csvJson = csvToJson(inputText, csvDelimiter);  
        setOutputText(csvJson);  
        return;  
    } catch (e) {  
        setOutputText('Input cannot be parsed as JSON, XML, or CSV.');  
    }  
}

function uploadAndConvert() {  
    const file = document.getElementById('fileInput').files[0];  
    if (!file) {  
        setOutputText('Please select a file to upload.');  
        return;  
    }  
    const fileName = file.name.toLowerCase();  
    if (!fileName.endsWith('.json') && !fileName.endsWith('.xml') && !fileName.endsWith('.csv')) {  
        setOutputText('Unsupported file type. Please upload a JSON, XML or CSV file.');  
        return;  
    }  
    const reader = new FileReader();  
    reader.onload = function(e) {  
        document.getElementById('inputText').value = e.target.result;  
        convert();  
    };  
    reader.readAsText(file);  
}  

function downloadResult() {  
    const outputText = document.getElementById('outputText').value;  
    let fileType = 'text/plain';  
    let fileExtension = 'txt';  
    if (outputText.startsWith('{') && outputText.endsWith('}')) {  
        fileType = 'application/json';  
        fileExtension = 'json';  
    } else if (outputText.startsWith('<') && outputText.endsWith('>')) {  
        fileType = 'application/xml';  
        fileExtension = 'xml';  
    }  
    const blob = new Blob([outputText], { type: fileType });  
    const url = URL.createObjectURL(blob);  
    const a = document.createElement('a');  
    a.href = url;  
    a.download = `converted_${fileExtension}`;  
    document.body.appendChild(a);  
    a.click();  
    document.body.removeChild(a);  
    URL.revokeObjectURL(url);  
}