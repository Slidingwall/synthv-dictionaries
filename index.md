---
title: HOME 主页
nav_order: 1
---

# Make Interlingual tuning easier  
{: .fs-9 }
让跨语种更简单

{: .fs-6 .fw-300 } 
"synthv-dictionaries" is a project devoted to make those single-language voicebanks of Synthesizer V can singing another language precisely. 
{: .fs-6 .fw-300 } 
"synthv-dictionaries"项目致力于让单语言Synthesizer V语音库能够地道的唱出另一种语言。 

[View on Github]{: .btn .btn-primary .fs-5 .mb-4 .mb-md-0 .mr-2 }  

Finding Job plugins for Vocaloid? Visit our [companion repository](/vocaloid-dictionaries/)!  
在找Vocaloid的插件吗？快来看看我们的[姐妹项目](/vocaloid-dictionaries/)！

Official sites: [Dreamtonics](https://dreamtonics.com/){: .btn } [Synthesizer V Forum](https://forum.synthesizerv.com/){: .btn }  
My Projects:    [vocaloid-dictionaries](/vocaloid-dictionaries/){: .btn }    [mandarin-reclist](/mandarin-reclist/){: .btn }  
See also: [SynthV Resources & Guides](https://synthv.info/){: .btn }

## Downloads 下载  

| Surpported Lyric Language<br />支持的歌词语言 | English Voicebank<br />英语语音库 | Chinese Voicebank<br />中文语音库 |Japanese Voicebank<br />日语语音库 |  
|:----:|:----:|:----:|:----:|
| English 英语 | N/A | [Download](https://github.com/Slidingwall/synthv-dictionaries/blob/main/mandarin-xsampa/English.json) | [Download](https://github.com/Slidingwall/synthv-dictionaries/blob/main/japanese-romaji/English.json) |
| Chinese 中文 | [Download](https://github.com/Slidingwall/synthv-dictionaries/blob/main/english-arpabet/Mandarin.json) | N/A | [Download](https://github.com/Slidingwall/synthv-dictionaries/blob/main/japanese-romaji/Mandarin.json) |
| Japanese 日语 | [Download](https://github.com/Slidingwall/synthv-dictionaries/blob/main/english-arpabet/Japanese.json) |  | N/A |
| Korean 韩语* | [Download](https://github.com/Slidingwall/synthv-dictionaries/blob/main/english-arpabet/Korean.json) | [Download](https://github.com/Slidingwall/synthv-dictionaries/blob/main/mandarin-xsampa/Korean.json) | [Download](https://github.com/Slidingwall/synthv-dictionaries/blob/main/japanese-romaji/Korean.json) |
| Yue 粤方言 | [Download](https://github.com/Slidingwall/synthv-dictionaries/blob/main/english-arpabet/Yue.json) | [Download](https://github.com/Slidingwall/synthv-dictionaries/blob/main/mandarin-xsampa/Yue.json) | [Download](https://github.com/Slidingwall/synthv-dictionaries/blob/main/japanese-romaji/Yue.json) |
| Spanish 西班牙语# | [Download](https://github.com/Slidingwall/synthv-dictionaries/blob/main/english-arpabet/Spanish.json) | [Download](https://github.com/Slidingwall/synthv-dictionaries/blob/main/mandarin-xsampa/Spanish.json) | [Download](https://github.com/Slidingwall/synthv-dictionaries/blob/main/japanese-romaji/Spanish.json) |
| Arpasing UST^ | [Download](https://github.com/Slidingwall/synthv-dictionaries/blob/main/english-arpabet/UST-Arpasing.json) | [Download](https://github.com/Slidingwall/synthv-dictionaries/blob/main/mandarin-xsampa/UST-Arpasing.json) | [Download](https://github.com/Slidingwall/synthv-dictionaries/blob/main/japanese-romaji/UST-Arpasing.json) |
| VCCV UST^ | [Download](https://github.com/Slidingwall/synthv-dictionaries/blob/main/english-arpabet/UST-VCCV.json) | [Download](https://github.com/Slidingwall/synthv-dictionaries/blob/main/mandarin-xsampa/UST-VCCV.json) | [Download](https://github.com/Slidingwall/synthv-dictionaries/blob/main/japanese-romaji/UST-VCCV.json) |

{: .note-title }
> 注意
> *: **[Experimental Function]**For Korean, Hangul included in _[KS X 1001](https://en.wikipedia.org/wiki/KS_X_1001)_ and _[Revised Romanization of Korean](https://en.wikipedia.org/wiki/Revised_Romanization_of_Korean)_ is used for input, and consonant assimilation is not supported during Hangul input, you can use the revised romanation which transcribed the phonetic changes instead. Please replace consonant `r` by `l` while inputing.  
> *：**[实验功能]**对于韩语，采用[KS X 1001](https://zh.wikipedia.org/wiki/KS_X_1001)包含的谚文及 [文化观光部2000年式（国语罗马字表记法）](https://zh.wikipedia.org/wiki/%E6%96%87%E5%8C%96%E8%A7%82%E5%85%89%E9%83%A82000%E5%B9%B4%E5%BC%8F) 进行输入，使用谚文输入时，不支持转换辅音音变，您可以用记录下音变的罗马字来代替。输入时，请将辅音 `r`用 `l`代替。
>
> #:Spanish supporting is still in development.  
> #：西班牙语支持仍在开发中。  
>
> ^:**[Experimental Function]**UST Importing is still in development.  
> ^：**[实验功能]**UST导入仍在开发中。
>
## About 关于

Interlingual user dictionary of Synthesizer V, Oringinally started in August 2020.  
Synthesizer V的跨语言用户词典，最初开始于2020年8月。  

### Synthesizer V Studio

We note the new native cross-lingual synthesis support in Synthesizer V Studio 1.5.0. As a result, our development goals will probably shift gradually to languages and dialects other than Mandarin, Japanese and English. However, as this new technology is only available for the AI voice bank and the Pro version of the editor, we will still be optimising the existing dictionaries to better support the Standard voice bank and the Basic version of the editor. This is our main task at the moment.

我们注意到Synthesizer V Studio 1.5.0新推出的原生跨语种合成支持。因此，我们的开发目标可能将转逐渐转向普通话、日语、英语之外的语言和方言。不过，因为这项新技术只能用于AI语音库，以及Pro版本的编辑器，我们仍旧会在现有字典的基础上进行优化，以便更好地支持Standard语音库和Basic版本的编辑器。这是我们目前的主要任务。

### Synthesizer V Editor

As all characters included in Synthesizer V Editor have received sound library updates as of 25 October 2021, the dictionaries in the Synthesizer V Editor version will no longer be kept up to date with the Synthesizer V Studio version, perhaps updating it when there is a major breakthrough in the dictionary's synthesis effects. They are, however, still available [here](https://github.com/Slidingwall/synthv-dictionaries/tree/main/Dictionaries%20for%20Synthesizer%20V%20Editor).

由于所有包含在Synthesizer V Editor中的角色截止至2021年10月25日都获得了声库更新，因此Synthesizer V Editor版本的字典将不再与Synthesizer V Studio版本保持同步更新，或许当字典的合成效果有重大突破时会更新它。不过，它们仍然在[这里](https://github.com/Slidingwall/synthv-dictionaries/tree/main/Dictionaries%20for%20Synthesizer%20V%20Editor)

---

This project maintained by Slidingwall.
这是一个由Slidingwall维护的项目。

[Bilibili](https://space.bilibili.com/141232009){: .btn .btn-purple .mr-2 }  [E=mail](mailto:slidingwall@outlook.com){: .btn .btn-green }

---
