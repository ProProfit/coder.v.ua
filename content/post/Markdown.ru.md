+++
title = "Markdown"
date = "2021-04-14T12:12:38+03:00"
tags = ['markdown']
draft = false
# author = ""
# source = ""
description = "облегчённый язык разметки, созданный с целью обозначения форматирования в простом тексте, с максимальным сохранением его читаемости человеком, и пригодный для машинного преобразования в языки для продвинутых публикаций (HTML, Rich Text и других)."
+++


### Заголовки

``` markdown

# H1
## H2
### H3
#### H4
##### H5
###### H6

```

# H1
## H2
### H3
#### H4
##### H5
###### H6

------

### Выделение

``` markdown
Выделение, или курсив, с *звездочками* или _Underscores_.

Сильный акцент, он же полужирный, с **звездочками** или __underscores__.

Комбинированное выделение **звездочками и _подчеркиванием _**.

Зачеркнутый использует две тильды. ~~Поцарапайте это.~~

```


Выделение, иначе курсив, с *звездочками* или _Underscores_ .  

Сильный акцент, он же полужирный, с **звездочками** или __underscores__.

Комбинированное выделение **звездочками и _подчеркиванием_**.

Зачеркнутый использует две тильды. ~~Поцарапайте это.~~

### Ссылки

``` markdown
[I'm an inline-style link](https://www.google.com)

[I'm an inline-style link with title](https://www.google.com "Google's Homepage")

[I'm a reference-style link][Arbitrary case-insensitive reference text]

[I'm a relative reference to a repository file](../blob/master/LICENSE)

[You can use numbers for reference-style link definitions][1]

Or leave it empty and use the [link text itself].

Some text to show that the reference links can follow later.

[arbitrary case-insensitive reference text]: https://www.mozilla.org
[1]: http://slashdot.org
[link text itself]: http://www.reddit.com
```

[Я ссылка](https://www.google.com)

[Я ссылка title](https://www.google.com "Google's Homepage")

[I'm a reference-style link][Arbitrary case-insensitive reference text]

[I'm a relative reference to a repository file](../blob/master/LICENSE)

[You can use numbers for reference-style link definitions][1]

Or leave it empty and use the [link text itself].

URLs and URLs in angle brackets will automatically get turned into links. 
http://www.example.com or <http://www.example.com> and sometimes 
example.com (but not on Github, for example).

Some text to show that the reference links can follow later.

[arbitrary case-insensitive reference text]: https://www.mozilla.org
[1]: http://slashdot.org
[link text itself]: http://www.reddit.com


### Images

``` markdown

Here's our logo (hover to see the title text):

Inline-style: 
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")

Reference-style: 
![alt text][logo]

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 2"
```

Here's our logo (hover to see the title text):

Inline-style: 
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")

Reference-style: 
![alt text][logo]

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 2"


### Code and Syntax Highlighting



``` js
var s = "JavaScript syntax highlighting";
alert(s);
```
 
OR
 
``` python
s = "Python syntax highlighting"
print s
```

No language indicated, so no syntax highlighting. 
But let's throw in a <b>tag</b>.

### Tables

``` markdown

Colons can be used to align columns.

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

There must be at least 3 dashes separating each header cell.
The outer pipes (|) are optional, and you don't need to make the 
raw Markdown line up prettily. You can also use inline Markdown.

Markdown | Less | Pretty
     --- | --- | ---
 *Still* | `renders` | **nicely**
        1 | 2 | 3
```

Colons can be used to align columns.

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

There must be at least 3 dashes separating each header cell.
The outer pipes (|) are optional, and you don't need to make the 
raw Markdown line up prettily. You can also use inline Markdown.

Markdown | Less | Pretty
--- | --- | ---
*Still* | `renders` | **nicely**
1 | 2 | 3

### Blockquotes

``` markdown
 > Blockquotes are very handy in email to emulate reply text.
 > This line is part of the same quote.
```

 > Blockquotes are very handy in email to emulate reply text.
 > This line is part of the same quote.

### Horizontal Rule

``` markdown
Three or more...

---

Hyphens

***

Asterisks

___

Underscores  
```

Three or more...

---

Hyphens

***

Asterisks

___

Underscores