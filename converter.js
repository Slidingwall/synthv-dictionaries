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

function convert() {  
    var inputText = document.getElementById('inputText').value;  
    var outputText = document.getElementById('outputText');  
    if (!inputText) {  
        outputText.value = 'Input cannot be empty.';  
        return;  
    }
    try {  
        // 尝试将输入解析为JSON  
        var jsonObj = JSON.parse(inputText);  
        var xml = jsonToXml(jsonObj);  
        outputText.value = xml;  
    } catch (jsonError) {  
        // JSON解析失败，尝试将输入解析为XML  
        var xmlDoc = new DOMParser().parseFromString(inputText, "text/xml");  
        if (xmlDoc.getElementsByTagName("parsererror").length === 0) {  
            var json = xmlToJson(xmlDoc);  
            outputText.value = json;  
        } else {  
            // XML解析失败，尝试将输入作为CSV处理  
            var csvDelimiter = /,(?![^"]*"(?:(?:\\")*[^"]*)*$)/g.test(inputText) ? ',' : '\t';  
            var csvJson = csvToJson(inputText, csvDelimiter);  
            if (csvJson) {  
                outputText.value = csvJson;  
            } else {  
                // 所有解析尝试都失败了  
                outputText.value = 'Input cannot be parsed as JSON, XML, or CSV.';  
            }  
        }  
    }  
}  

function uploadAndConvert() {  
    const file = document.getElementById('fileInput').files[0];  
    if (!file) {  
        outputText.value ='Please select a file to upload.';  
        return;  
    }  
    const fileName = file.name.toLowerCase();  
    if (!fileName.endsWith('.json') && !fileName.endsWith('.xml') && !fileName.endsWith('.csv')) {  
        outputText.value ='Unsupported file type. Please upload a JSON, XML or CSV file.';  
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