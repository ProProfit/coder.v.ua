+++
title = "Подсветка синтаксис для Hugo"
date = "2020-10-28T01:46:59+02:00"
tags = ["hugo"]
draft = false
author = "ProCode"
description = "Немного того как мне удалось побороть sass, и заставить PhPShtorm компилить Sass в hugo"

+++
## Chroma Style Gallery
[Chroma Style Gallery](https://xyproto.github.io/splash/docs/)

```html

<section id="main">
  <div>
   <h1 id="title">{{ .Title }}</h1>
    {{ range .Pages }}
        {{ .Render "summary"}}
    {{ end }}
  </div>
</section>

```
wwww

```css
h1, h2, h3, h4, h5, h6, p, dl, ol, ul {
  margin-top: 0;
  margin-bottom: 1rem;
}

button, input, select, textarea {
  font-family: inherit;
  font-size: 100%;
```
fsdfsdf
{{< highlight html >}}
<section id="main">
  <div>
   <h1 id="title">{{ .Title }}</h1>
    {{ range .Pages }}
        {{ .Render "summary"}}
    {{ end }}
  </div>
</section>
{{< /highlight >}}



```css

.highlight
    position: relative
    -webkit-overflow-scrolling: touch
    pre, code
      background-color: #f3f3f3 !important
      color: #000 !important
      font-size: 15px
      padding-left: 15px
      font-family: Menlo, Monaco, "Courier New", monospace
      white-space: pre-wrap
      word-break: break-all
    &[class*="language-"]
      -webkit-overflow-scrolling: touch
      &:before
        background: #000000
        border-radius: 0 0 0.25rem 0.25rem
        color: white
        font-size: 12px
        letter-spacing: 0.025rem
        padding: 0.1rem 0.5rem
        position: absolute
        right: 1rem
        text-align: right
        text-transform: uppercase
        top: 0

```
sss


```javascript
const disableDarkMode = () =>
{
    theme.href = "/css/main.min.css";
    localStorage.setItem("ThemeDark", null);
    document.getElementById("btnTheme").innerHTML = (lightbg_d);
};
if (darkMode === 'enabled'){
    enableDarkMode();
};
darkModeToggle.addEventListener("click", () => {
        darkMode = localStorage.getItem("ThemeDark");

        if (darkMode !== "enabled")
        {	enableDarkMode();
        }
        else
        {	disableDarkMode();
        }
    }
);


```
asdasd
```markdown
## Chroma Style Gallery
[Chroma Style Gallery](https://xyproto.github.io/splash/docs/)

```html

<section id="main">
  <div>
   <h1 id="title">{{ .Title }}</h1>
    {{ range .Pages }}
        {{ .Render "summary"}}
    {{ end }}
  </div>
</section>
```