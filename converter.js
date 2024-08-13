function xmlToJson(xmlDoc) {  
    var properties = xmlDoc.getElementsByTagName('PROPERTIES')[0];  
    if (!properties) {  
        throw new Error("No <PROPERTIES> tag found in XML.");  
    }  
   
    var values = properties.getElementsByTagName('VALUE');  
    var jsonData = [];  
    
    Array.from(values).forEach(function(value) {  
        var obj = {};    
        var name = value.getAttribute('name');  
        var val = value.getAttribute('val');  
        if (name && val) {  
            obj.w = name;  
            obj.p = val;  
            jsonData.push(obj);  
        } else {  
            console.warn("Missing 'name' or 'val' attribute in <VALUE> tag.");  
        }  
    });  
  
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

function convert() {  
    var inputText = document.getElementById('inputText').value;  
    var outputText = document.getElementById('outputText');  
    if (!inputText) {  
        outputText.value = 'Input cannot be empty.';  
        return;  
    }
    try {    
        var jsonObj = JSON.parse(inputText);   
        var xml = jsonToXml(jsonObj);  
        outputText.value = xml;  
    } catch (jsonError) {    
        var xmlDoc = new DOMParser().parseFromString(inputText, "text/xml");  
        if (xmlDoc.getElementsByTagName("parsererror").length > 0) {  
            outputText.value = 'Invalid XML format: ' + xmlDoc.getElementsByTagName("parsererror")[0].textContent;  
        } else {  
            var json = xmlToJson(xmlDoc);  
            if (json) {  
                outputText.value = json;  
            } else {  
                outputText.value = 'Invalid XML format or unable to convert to JSON.';  
            }  
        }  
    }  
}   

function uploadAndConvert() {  
    const file = document.getElementById('fileInput').files[0];  
    if (!file) {  
        alert('Please select a file to upload.');  
        return;  
    }  
    const fileName = file.name.toLowerCase();  
    if (!fileName.endsWith('.json') && !fileName.endsWith('.xml')) {  
        alert('Unsupported file type. Please upload a JSON or XML file.');  
        return;  
    }
    const reader = new FileReader();  
    reader.onload = function(e) {  
        console.log('File loaded:', e.target.result); 
        document.getElementById('inputText').value = e.target.result;  
        convert(); 
    };  
    reader.readAsText(file); 
}

function downloadResult() {  
    const outputText = document.getElementById('outputText').value;    
    let fileType = 'text/plain'; 
    if (outputText.startsWith('{') && outputText.endsWith('}')) {  
        fileType = 'application/json';  
    } else if (outputText.startsWith('<') && outputText.endsWith('>')) {  
        fileType = 'application/xml';  
    }  
  
    const blob = new Blob([outputText], { type: fileType });  
      
    const url = URL.createObjectURL(blob);  
      
    const a = document.createElement('a');  
    a.href = url;  
    a.download = 'converted_' + (fileType === 'application/json' ? 'json' : 'xml');  
    document.body.appendChild(a);  
    a.click();  
      
    document.body.removeChild(a);  
    URL.revokeObjectURL(url);  
} 