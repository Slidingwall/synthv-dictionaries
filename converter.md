---
layout: default
title: Dictionary Converter 字典转换器
nav_order: 6
---
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>  
  
# Dictionary Converter 字典转换器 

虽然我们不再更新适用于初代Synthesizer V的字典，但我们提供了一个轻巧的转换器，可以将现行版本支持的字典与初代Synthesizer V支持的字典相互转换。  
Although we no longer update dictionaries compatible with the first-generation Synthesizer V, we provide a lightweight converter that enables mutual conversion between dictionaries supported by the current version and those supported by the first-generation Synthesizer V.  
您也可以粘贴CSV或Excel表格，转换器会自动将其转换为现行版本支持的字典。  
You can also paste CSV or Excel tables, and the converter will automatically convert them into dictionaries supported by the current version.  
<textarea id="inputText" rows="15" cols="75" placeholder="Paste your dictionary here...  请粘贴您的字典…"></textarea>  
<input type="file" id="fileInput" class="btn" accept=".json,.xml" />{: .btn .btn }
<button type="button" name="button" class="btn" onclick="uploadAndConvert()">Upload 上传</button>{: .btn .btn-blue }
<button type="button" name="button" class="btn" onclick="convert()">Convert 转换</button>{: .btn .btn-green }  
  
### Resulting Output 输出结果  
<textarea id="outputText" rows="15" cols="75" readonly></textarea>  
<button type="button" name="button" class="btn" onclick="downloadResult()">Download 下载</button>{: .btn .btn-purple }  
  
<script src="converter.js"></script>  
