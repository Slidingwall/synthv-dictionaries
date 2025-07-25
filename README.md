# synthv-dictionaries

Interlingual user dictionary of Synthesizer V.
Synthesizer V的跨语言用户词典。

Visit our [GitHub Pages](https://slidingwall.github.io/synthv-dictionaries) for detail instruction, or see the companion repository [for Vocaloid](https://github.com/Slidingwall/vocaloid-dictionaries)!  
访问我们的[GitHub 页面](https://slidingwall.github.io/synthv-dictionaries)查看详细教程，或是看看适用于Vocaloid的[姐妹项目](https://github.com/Slidingwall/vocaloid-dictionaries)！

We have noticed that Synthesizer V Studio 2 will no longer offer a free version, which means all users within its coverage will no longer need to rely on user dictionaries to implement cross-lingual features. For users who want their voicebanks to sing in other unsupported languages, using other plugins that splice phonemes from different languages will be more useful.  

我们注意到Synthesizer V Studio 2起将不再提供免费版本，这意味着其覆盖的所有用户将无需通过用户字典实现跨语种功能。对于想要使语音库唱出其它不受支持的语言歌声的用户而言，使用其他拼接不同语言音素的插件会更有用。  

## How to use 如何使用

Floder's name means the generation of Synthesizer V and the language of your voicebank. For example, `english-arpabet` means English voicebank.  
文件夹的名称代表 Synthesizer V 编辑器的版本和语音库的语言。例如， `english-arpabet` 是指英语语音库。  
The file name means the language you want to sing from the voicebank. For example, `Mandarin.json` means this dictionary will let the voicebank singing Mandarin.  
文件的名称代表你想让语音库唱出的语言，例如，`Mandarin.json` 意味着这个字典将会让您的语音库唱出普通话。

Dictionaries for first-generation Synthesizer V are avalable [here](https://github.com/Slidingwall/synthv-dictionaries/blob/main/Dictionaries%20for%20Synthesizer%20V%20Editor/). You can use [converter](https://slidingwall.github.io/synthv-dictionaries/converter) to convert dictionaries between current version and former version.  
初代Synthesizer V所支持的字典在[这里](https://github.com/Slidingwall/synthv-dictionaries/blob/main/Dictionaries%20for%20Synthesizer%20V%20Editor/)。您也可以通过[转换器](https://slidingwall.github.io/synthv-dictionaries/converter)将字典在现行版本与先前版本所支持的格式之间进行转换。   
For dictionary developers, you can also paste an Excel or CSV table in the converter with the format of `words,phonemes` to quickly convert it into a dictionary in JSON format.  
对于字典开发者，您也可以在转换器中粘贴格式为`单词,音素`的Excel表格或csv表格，快速将其转换为json格式的字典。  

## Released dictionaries 已公开字典

All these dictionaries' demos and examples are on [GitHub Pages](https://slidingwall.github.io/synthv-dictionaries/demo), including before and after comparisons and some sample songs.  
这些字典的演示和用例都在 [GitHub Pages](https://slidingwall.github.io/synthv-dictionaries/demo) 中，包括使用前后的对比和一些歌曲样本。

| Surpported Lyric Language<br />支持的歌词语言 | English Voicebank<br />英语语音库 | Chinese Voicebank<br />中文语音库 | Japanese Voicebank<br />日语语音库 |
|:----:|:----:|:----:|:----:|
| English 英语 | N/A | √ | √ |
| Chinese 中文 | √ | N/A | √ |
| Japanese 日语 | √ | | N/A |
| Korean 韩语[^1] | √ | √ | √ |
| Yue 粤方言 | √ | √ | √ |
| Spanish 西班牙语[^2] | √ | √ | √ |
| Arpasing UST[^3] | √ | √ | √ |
| VCCV UST[^3] | √ | √ | √ |
| Minnan 闽南方言[^4] | √ | √ | √ |

[^1]: **[Experimental Function]** For Korean, Hangul included in _[KS X 1001](https://en.wikipedia.org/wiki/KS_X_1001)_ and _[Revised Romanization of Korean](https://en.wikipedia.org/wiki/Revised_Romanization_of_Korean)_ is used for input, and consonant assimilation is not supported during Hangul input, you can use the revised romanation which transcribed the phonetic changes instead. Please replace consonant `r` by `l` while inputing.  
      **[实验功能]** 对于韩语，采用[KS X 1001](https://zh.wikipedia.org/wiki/KS_X_1001)包含的谚文及 [文化观光部2000年式（国语罗马字表记法）](https://zh.wikipedia.org/wiki/%E6%96%87%E5%8C%96%E8%A7%82%E5%85%89%E9%83%A82000%E5%B9%B4%E5%BC%8F) 进行输入，使用谚文输入时，不支持转换辅音音变，您可以用记录下音变的罗马字来代替。输入时，请将辅音 `r`用 `l`代替。

[^2]: Spanish supporting is still in development.  
      西班牙语支持仍在开发中。  

[^3]: **[Experimental Function]** UST Importing is still in development.  
      **[实验功能]** UST导入仍在开发中。  
      
[^4]: **[Experimental Function]** For Minnan Dialect, primarily input using Tailo Pinyin(TL), with some consideration also given to Pehoeji(POJ) and the Taiwan Language Phonetic Alphabet(TLPA).  
      **[实验功能]** 对于闽南方言，以台罗拼音为主，兼顾部分白话字及台湾语言音标方案的表记。  

**Any contributions are welcome. 欢迎任何形式的贡献**

---

Author: Slidingwall ([Bilibili](https://space.bilibili.com/141232009))
作者：Slidingwall（[哔哩哔哩](https://space.bilibili.com/141232009)）

---
