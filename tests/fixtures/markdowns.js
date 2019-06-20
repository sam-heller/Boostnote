const basic = `
# Welcome to Boostnote!
## Click here to edit markdown :wave:

<iframe width="560" height="315" src="https://www.youtube.com/embed/L0qNPLsvmyM" frameborder="0" allowfullscreen></iframe>

## Docs :memo:
- [Boostnote | Boost your happiness, productivity and creativity.](https://hackernoon.com/boostnote-boost-your-happiness-productivity-and-creativity-315034efeebe)
- [Cloud Syncing & Backups](https://github.com/BoostIO/Boostnote/wiki/Cloud-Syncing-and-Backup)
- [How to sync your data across Desktop and Mobile apps](https://github.com/BoostIO/Boostnote/wiki/Sync-Data-Across-Desktop-and-Mobile-apps)
- [Convert data from **Evernote** to Boostnote.](https://github.com/BoostIO/Boostnote/wiki/Evernote)
- [Keyboard Shortcuts](https://github.com/BoostIO/Boostnote/wiki/Keyboard-Shortcuts)
- [Keymaps in Editor mode](https://github.com/BoostIO/Boostnote/wiki/Keymaps-in-Editor-mode)
- [How to set syntax highlight in Snippet note](https://github.com/BoostIO/Boostnote/wiki/Syntax-Highlighting)

---

## Article Archive :books:
- [Reddit English](http://bit.ly/2mOJPu7)
- [Reddit Spanish](https://www.reddit.com/r/boostnote_es/)
- [Reddit Chinese](https://www.reddit.com/r/boostnote_cn/)
- [Reddit Japanese](https://www.reddit.com/r/boostnote_jp/)

---

## Community :beers:
- [GitHub](http://bit.ly/2AWWzkD)
- [Twitter](http://bit.ly/2z8BUJZ)
- [Facebook Group](http://bit.ly/2jcca8t)
`

const codeblock = `
\`\`\`js:filename.js:2
var project = 'boostnote';
\`\`\`
`

const katex = `
$$
c = \pm\sqrt{a^2 + b^2}
$$
`

const checkboxes = `
- [ ] Unchecked
- [x] Checked
`

const smartQuotes = 'This is a "QUOTE".'

const breaks = 'This is the first line.\nThis is the second line.'

const abbrevations = `
## abbr

The HTML specification
is maintained by the W3C.

*[HTML]: Hyper Text Markup Language
*[W3C]:  World Wide Web Consortium
`

const subTexts = `
## sub

H~2~0
`

const supTexts = `
## sup

29^th^
`

const deflists = `
## definition list

### list 1

Term 1
  ~ Definition 1

Term 2
  ~ Definition 2a
  ~ Definition 2b

Term 3
~


### list 2

Term 1

:   Definition 1

Term 2 with *inline markup*

:   Definition 2

        { some code, part of Definition 2 }

    Third paragraph of definition 2.
`
const shortcuts = '<kbd>Ctrl</kbd>\n\n[[Ctrl]]'

// Lack of heredoc means we need to convert the ''' to ```
// after these tests run.
const mermaid = `
## Tests shamelessly stolen from [MermaidJS Docs](https://mermaidjs.github.io/demos.html)
'''mermaid 
graph LR 
    A(( )) -->B("P(A)")
    A(( )) -->C("P(Ā)")

    style A fill:black,stroke:black
    style B fill:white,stroke:white,text-color:red
    style C fill:white,stroke:white
'''

'''mermaid
sequenceDiagram
    Alice ->> Bob: Hello Bob, how are you?
    Bob-->>John: How about you John?
    Bob--x Alice: I am good thanks!
    Bob-x John: I am good thanks!
    Note right of John: Bob thinks a long<br/>long time, so long<br/>that the text does<br/>not fit on a row.

    Bob-->Alice: Checking with John...
    Alice->John: Yes... John, how are you?
'''

'''mermaid
graph TB
    sq[Square shape] --> ci((Circle shape))

    subgraph A subgraph
        od>Odd shape]-- Two line<br/>edge comment --> ro
        di{Diamond with <br/> line break} -.-> ro(Rounded<br>square<br>shape)
        di==>ro2(Rounded square shape)
    end

    %% Notice that no text in shape are added here instead that is appended further down
    e --> od3>Really long text with linebreak<br>in an Odd shape]

    %% Comments after double percent signs
    e((Inner / circle<br>and some odd <br>special characters)) --> f(,.?!+-*ز)

    cyr[Cyrillic]-->cyr2((Circle shape Начало));

     classDef green fill:#9f6,stroke:#333,stroke-width:2px;
     classDef orange fill:#f96,stroke:#333,stroke-width:4px;
     class sq,e green
     class di orange

'''

'''mermaid
gantt
    title A Gantt Diagram
    dateFormat  YYYY-MM-DD
    section Section
    A task           :a1, 2014-01-01, 30d
    Another task     :after a1  , 20d
    section Another
    Task in sec      :2014-01-12  , 12d
    another task      : 24d
'''
`.replace("'''", '```')

export default {
  basic,
  codeblock,
  katex,
  checkboxes,
  smartQuotes,
  breaks,
  abbrevations,
  subTexts,
  supTexts,
  deflists,
  shortcuts,
  mermaid
}
