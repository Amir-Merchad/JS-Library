# 📚 Library Management App

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)  [![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)  [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)   [![GitHub](https://img.shields.io/github/stars/Amir-Merchad/JS-Library)](https://github.com/Amir-Merchad/JS-Library)

A simple and interactive personal library app built with vanilla JavaScript, HTML, and CSS.  
Add, remove, and toggle read status of your books using a clean UI with the HTML `<dialog>` element.

---

<p align="left">
  <img src="./images/img.png" alt="Library App Screenshot" width="300" />
</p>

---

## 🔍 Features

- Add books with title, author, page count, and read status
- Toggle book status between "Read" and "Not Read"
- Remove books from the library list
- Uses native HTML `<dialog>` for modal input
- Unique book IDs generated with `crypto.randomUUID()`
- Responsive and minimal design

---

## 🚀 Live Demo

[🔗 View Site](https://amir-merchad.github.io/JS-Library/)

---

## 🛠️ Technologies Used

| Technology       | Version | Notes                                       |
|------------------|---------|---------------------------------------------|
| HTML             | 5       | Semantic markup with dialog element         |
| CSS              | 3       | Flexbox, CSS variables for color palette    |
| JavaScript       | ES6+    | Classes, DOM manipulation, event handling   |
| Web APIs         | —       | `crypto.randomUUID()` for unique IDs        |
| Git / GitHub     | —       | Version control and project hosting         |

---

## 📁 Project Structure

~~~plaintext
calculator-app/
├── index.html
├── styles.css
├── script.js
├── README.md
└── images/
    ├── img.png
    └── github-mark.png
~~~
---

## 🧠 What I Learned

- Managing state in a JavaScript array
- Dynamically creating and updating DOM elements
- Handling user input with forms and validation
- Using the `<dialog>` element for modals
- Working with unique IDs to track items
- Event delegation for dynamically added elements

---

## 🧪 How to Run Locally

```bash
git clone https://github.com/yourusername/library-app.git
cd library-app
open index.html