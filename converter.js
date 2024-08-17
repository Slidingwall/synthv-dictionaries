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
    const lines = csvText.split(/\r\n|\n/);  
    return JSON.stringify({  
        data: lines.map(line => {  
            const [w, p] = line.split(delimiter).map(s => s.trim());  
            if (w && p) return { w, p };  
        }).filter(obj => obj)  
    }, null, 4);  
}  
  
function tryParseXml(inputText) {  
    const xmlDoc = new DOMParser().parseFromString(inputText, "text/xml");  
    return xmlDoc.getElementsByTagName("parsererror").length === 0 ? xmlDoc : null;  
}  
  
function convert() {  
    const inputText = document.getElementById('inputText').value;  
    if (!inputText) {  
        setOutputText('Input cannot be empty.');  
        return;  
    }  
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
    if (!file) {  
        setOutputText('Please select a file to upload.');  
        return;  
    }  
    const fileExtension = file.name.split('.').pop().toLowerCase();  
    if (!['json', 'xml', 'csv'].includes(fileExtension)) {  
        setOutputText('Unsupported file type. Please upload a JSON, XML or CSV file.');  
        return;  
    }  
    const reader = new FileReader();  
    reader.onload = e => {  
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
    const a = document.createElement('a');  
    a.href = URL.createObjectURL(blob);  
    a.download = `converted_${fileExtension}`;   
    a.dispatchEvent(new MouseEvent('click', {  
        'view': window,  
        'bubbles': true,  
        'cancelable': true  
    }));  
    URL.revokeObjectURL(a.href);
}