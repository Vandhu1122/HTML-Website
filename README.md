# Web Development Learning Hub

A structured, beginner-friendly educational open-source portfolio showcasing HTML5 and CSS3 fundamentals, responsive layouts, multimedia players, and structured coursework assignments.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![HTML5](https://img.shields.io/badge/HTML-5-orange.svg)]()
[![CSS3](https://img.shields.io/badge/CSS-3-blue.svg)]()

---

## Project Overview

The **Web Development Learning Hub** provides clear, standards-compliant examples of fundamental web development concepts. Designed for learners and developers alike, it demonstrates clean semantic markup, accessible forms, responsive layout patterns, and modern CSS architecture without external runtime dependencies.

The repository is structured into three main modules:
1. **Website Showcase:** A complete, multi-page website featuring standard business/educational sections (Home, About, Contact, Media Player, Login, and Registration).
2. **Topic Guides (`topics/`):** Focused educational references explaining foundational HTML mechanics such as document structure, heading hierarchy, inline vs. block elements, and hyperlinks.
3. **Coursework Assignments (`assignments/`):** Practical laboratory exercises demonstrating text formatting, lists, tables, background styling, and multimedia players.

---

## Project Structure

```
HTML-Website/
├── index.html                   # Main landing page & hero showcase
├── about.html                   # About the platform & curriculum
├── contact.html                 # Contact & feedback form
├── media.html                   # Multimedia audio & video showcase
├── login.html                   # Accessible user login interface
├── signup.html                  # Accessible user registration form
├── assignments.html             # Coursework portal & learning module directory
├── .gitignore                   # Git exclusion rules
├── LICENSE                      # MIT Open Source License
├── README.md                    # Project documentation & usage guide
├── CONTRIBUTING.md              # Contributor guidelines & code standards
│
├── assets/
│   ├── css/
│   │   └── style.css            # Central design system & responsive stylesheet
│   └── images/
│       ├── logo.jpg             # Learning hub banner logo
│       ├── logo1.jpg            # Navigation brand icon
│       ├── img.webp             # Homepage hero artwork
│       └── vandana-image.jpg    # Sample profile graphic
│
├── topics/                      # Core concept guides
│   ├── headings.html            # Heading tags (H1-H6) & document hierarchy
│   ├── html-basics.html         # Document skeleton, doctype, and metadata
│   ├── html-elements.html       # Inline vs. block-level element guide
│   └── links-and-images.html    # Hyperlinks, image embedding & attributes
│
└── assignments/                 # Hands-on coursework exercises
    ├── assignment-01.html       # Text formatting tags & typography
    ├── assignment-03.html       # Semantic layout & section structure
    ├── assignment-04.html       # Div and span container usage
    ├── assignment-05.html       # Unordered lists and list item bullets
    ├── assignment-06.html       # Ordered lists and numbering schemes
    ├── assignment-07.html       # Description lists, terms & definitions
    ├── assignment-08.html       # CSS background image styling
    ├── assignment-09.html       # Hyperlink destinations, targets & bookmarks
    ├── assignment-10.html       # HTML tables, headers, colspan & rowspan
    └── assignment-12.html       # HTML5 audio and video multimedia embedding
```

---

## Page Directory

The table below outlines every web page included across the repository, along with its relative path and functional description:

| Page / Module | File Path | Description |
| :--- | :--- | :--- |
| **Home** | `index.html` | Landing portal featuring a responsive flexbox hero banner, highlights, and quick access navigation. |
| **About Us** | `about.html` | Background on the learning hub, mission statement, curriculum overview, and technologies covered. |
| **Contact** | `contact.html` | Inquiries and feedback page with an accessible form (labels, inputs, textareas) and contact details. |
| **Media Showcase** | `media.html` | Audio and video players utilizing native HTML5 controls with fallback options and responsive wrappers. |
| **User Login** | `login.html` | Clean authentication form with client-side attributes and accessible form labeling. |
| **User Registration** | `signup.html` | New student sign-up form with input validations and direct routing to the login portal. |
| **Assignments Portal** | `assignments.html` | Central catalog linking all topic tutorials and practical coursework assignments. |
| **HTML Basics** | `topics/html-basics.html` | Tutorial covering fundamental document skeleton, doctype declaration, `<head>`, and `<body>`. |
| **Headings Hierarchy** | `topics/headings.html` | Reference guide illustrating heading hierarchy from `<h1>` down to `<h6>`. |
| **HTML Elements** | `topics/html-elements.html` | Detailed reference examining block-level vs. inline elements and content groupings. |
| **Links & Images** | `topics/links-and-images.html` | Reference for absolute vs. relative hyperlinks, anchor bookmarks, and image attributes. |
| **Assignment 1** | `assignments/assignment-01.html` | Text formatting exercise demonstrating `<strong>`, `<em>`, `<u>`, `<mark>`, `<sub>`, and `<sup>`. |
| **Assignment 3** | `assignments/assignment-03.html` | Multi-section semantic page layout demonstrating clean content hierarchy. |
| **Assignment 4** | `assignments/assignment-04.html` | Practical demonstration of container usage with `<div>` and inline text grouping with `<span>`. |
| **Assignment 5** | `assignments/assignment-05.html` | Unordered list variants illustrating default disc, circle, and square bullet styles. |
| **Assignment 6** | `assignments/assignment-06.html` | Ordered list variants demonstrating numeric, alphabetic (upper/lower), and Roman numeral types. |
| **Assignment 7** | `assignments/assignment-07.html` | Glossary terms and definitions structured using description lists (`<dl>`, `<dt>`, `<dd>`). |
| **Assignment 8** | `assignments/assignment-08.html` | Modern presentation of background graphics managed with CSS properties rather than inline attributes. |
| **Assignment 9** | `assignments/assignment-09.html` | Comprehensive hyperlink guide showing internal anchors, external targets, and mailto/tel protocols. |
| **Assignment 10** | `assignments/assignment-10.html` | Tabular data presentation featuring `<caption>`, `<thead>`, `<tbody>`, `colspan`, and `rowspan`. |
| **Assignment 12** | `assignments/assignment-12.html` | Multimedia integration page featuring embedded HTML5 audio and video playback controls. |

---

## Getting Started Locally

No compilers, package managers, or server runtimes are required. You can run the project locally using any modern web browser:

### Option 1: Direct File Opening
1. Clone or download this repository:
   ```bash
   git clone https://github.com/Vandhu1122/HTML-Website.git
   ```
2. Navigate to the repository folder:
   ```bash
   cd HTML-Website
   ```
3. Open `index.html` directly in your favorite browser (Chrome, Firefox, Edge, Safari):
   - Double-click `index.html` in your file explorer, or
   - Right-click and choose **Open with...** -> your browser.

### Option 2: VS Code Live Server (Recommended)
1. Open the repository folder in [Visual Studio Code](https://code.visualstudio.com/).
2. Install the **Live Server** extension (by Ritwick Dey) from the VS Code Marketplace.
3. Right-click on `index.html` in the VS Code Explorer and click **Open with Live Server** (or click "Go Live" in the status bar).
4. The website will launch automatically at `http://localhost:5500`.

---

## Author & Project Maintainer

Created and maintained by [Vandana](https://github.com/Vandhu1122).

---

## Contributing

Contributions from learners and developers are warmly welcomed! Please read our [CONTRIBUTING.md](CONTRIBUTING.md) guide for details on our code style standards, local testing guidelines, and the pull request workflow.

---

## License

This project is open-source and distributed under the terms of the [MIT License](LICENSE).

