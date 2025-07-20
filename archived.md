---
nav_order: 3
---

# Dictionaries for SVR1 为SVR1制作的字典 
{: .no_toc }{: .d-inline-block }
Archived 已存档
{: .label .label-red }  

## Table of Contents
{: .no_toc .text-delta }

1. TOC
{:toc}

{: .warning }
> Discontinued on 4 July 2022.  
> 自2022年7月34日弃用。  
> 
> Dictionaries are not universal between Synthesizer V Editor and Synthesizer V Studio. However, we provide a [converter](https://slidingwall.github.io/synthv-dictionaries/converter) for you to convert dictionaries between current version and former version.   
> 用户词典在Synthesizer V Editor 和 Synthesizer V Studio 之间并不通用。不过，我们提供了一个[转换器](https://slidingwall.github.io/synthv-dictionaries/converter)以便您将字典在现行版本与先前版本所支持的格式之间进行转换。  

## How to Use 如何使用
Put the folder in `Synthesizer V Editor\presets\dictionary-[language]-[phoneme format]`, then you'll see the dictionary in `Settings`-->`User Dictionary`.  
将文件夹放入 `Synthesizer V Editor\presets\dictionary-[语言]-[音素制式]`中，即可在`设置`-->`用户词典`中看见用户词典。  
![Put *.xml file in the correct folder](/assets/R1win-1.webp)  
Put *.xml file in the correct folder  
![To find the Dictionary Editor, find "User Dictionary" in the "Settings" menu.](/assets/R1win-2.webp)  
To find the Dictionary Editor, find "User Dictionary" in the "Settings" menu.  
![Choose the dictionary in the Dictionary Editor](/assets/R1win-3.webp)  
Choose the dictionary in the Dictionary Editor  

## Download 下载

| Surpported Lyric Language<br />支持的歌词语言 | English Voicebank<br />英语语音库 | Mandarin Voicebank<br />普通话语音库 |Japanese Voicebank<br />日语语音库 |  
|:----:|:----:|:----:|:----:|
| English 英语 | N/A | [Download](https://github.com/Slidingwall/synthv-dictionaries/blob/main/Dictionaries%20for%20Synthesizer%20V%20Editor/dictionary-mandarin-xsampa/English.xml) | [Download](https://github.com/Slidingwall/synthv-dictionaries/blob/main/Dictionaries%20for%20Synthesizer%20V%20Editor/dictionary-japanese-romaji/English.xml) |
| Mandarin 普通话 | [Download](https://github.com/Slidingwall/synthv-dictionaries/blob/main/Dictionaries%20for%20Synthesizer%20V%20Editor/dictionary-english-arpabet/Mandarin.xml) | N/A | [Download](https://github.com/Slidingwall/synthv-dictionaries/blob/main/Dictionaries%20for%20Synthesizer%20V%20Editor/dictionary-japanese-romaji/Mandarin.xml) |
| Japanese 日语 | [Download](https://github.com/Slidingwall/synthv-dictionaries/blob/main/Dictionaries%20for%20Synthesizer%20V%20Editor/dictionary-english-arpabet/Japanese.xml) |  | N/A |
| Korean 韩语[^1] | [Download](https://github.com/Slidingwall/synthv-dictionaries/blob/main/Dictionaries%20for%20Synthesizer%20V%20Editor/dictionary-english-arpabet/Korean.xml) | [Download](https://github.com/Slidingwall/synthv-dictionaries/blob/main/Dictionaries%20for%20Synthesizer%20V%20Editor/dictionary-mandarin-xsampa/Korean.xml) | [Download](https://github.com/Slidingwall/synthv-dictionaries/blob/main/Dictionaries%20for%20Synthesizer%20V%20Editor/dictionary-japanese-romaji/Korean.xml) |

[^1]: **Experimental Function**{: .label }
      For Korean, Hangul included in _[KS X 1001](https://en.wikipedia.org/wiki/KS_X_1001)_ and _[Revised Romanization of Korean](https://en.wikipedia.org/wiki/Revised_Romanization_of_Korean)_ is used for input, and consonant assimilation is not supported during Hangul input, you can use the revised romanation which transcribed the phonetic changes instead. Please replace consonant `r` by `l` while inputing.  
      **实验功能**{: .label }
      对于韩语，采用[KS X 1001](https://zh.wikipedia.org/wiki/KS_X_1001)包含的谚文及 [文化观光部2000年式（国语罗马字表记法）](https://zh.wikipedia.org/wiki/%E6%96%87%E5%8C%96%E8%A7%82%E5%85%89%E9%83%A82000%E5%B9%B4%E5%BC%8F) 进行输入，使用谚文输入时，不支持转换辅音音变，您可以用记录下音变的罗马字来代替。输入时，请将辅音 `r`用 `l`代替。