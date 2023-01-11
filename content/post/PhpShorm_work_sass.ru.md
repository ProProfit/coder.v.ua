+++
title = "PhpShorm добавляем sass и выводим в нужную папку"
date = "2020-10-28T14:24:33+02:00"
tags = ["sass", "phpshtorm"]
draft = false
description = "Немного того как мне удалось побороть sass, и заставить PhPShtorm компилить Sass в hugo"
+++

## PhpShorm 

Немного того как мне удалось побороть sass, и заставить PhPShtorm компилить Sass в hugo

### File Wather

 ### sass

Program `C:\Ruby27-x64\bin\sass`
    
Argument: 
```
--no-cache --update --sourcemap=none $FileName$:
$ProjectFileDir$/ путь к папке css /themes/NAME_THEME/static/css/
$FileNameWithoutExtension$.css`
```

Output: 
```
$ProjectFileDir$/путь к папке css /themes/NAME_THEME/static/css/
$FileNameWithoutExtension$.css:
$FileNameWithoutExtension$.css.map
```

Warking: `$FileDir$`

### sass main

Program `C:\Ruby27-x64\bin\sass`
 
 Argument: 
 ```
--style compressed --no-cache --update --sourcemap=none $FileName$:
$ProjectFileDir$/themes/NAME_THEME/static/css/
$FileNameWithoutExtension$.min.css
```

Output: 
```
$ProjectFileDir$/themes/NAME_THEME/static/css/
$FileNameWithoutExtension$.min.css:
$FileNameWithoutExtension$.min.css.map
```

Warking: `$FileDir$`


![phpshorm_sass](https://i.ibb.co/SPVxHTs/phpshtorm-sass.jpg "phpshorm sass")


