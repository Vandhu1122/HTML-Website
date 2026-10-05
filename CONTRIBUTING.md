# Contributing Guidelines

Thank you for your interest in contributing to the **Web Development Learning Hub**! This project is maintained as an open-source, beginner-friendly learning platform built entirely with standard HTML5 and CSS3.

We welcome contributions of all levels—from fixing typos and improving documentation to enhancing accessibility and optimizing page layouts.

---

## Getting Started

### 1. Fork the Repository
Click the **Fork** button at the top right of the GitHub repository page to create a copy of the repository under your own GitHub account.

### 2. Clone Your Fork
Clone your fork to your local computer:
```bash
git clone https://github.com/<your-username>/HTML-Website.git
cd HTML-Website
```

### 3. Create a Feature Branch
Create a descriptive branch for the work you plan to do. Use prefixes like `fix/` for bug fixes or `docs/` for documentation updates:
```bash
git checkout -b fix/update-contact-labels
```

### 4. Make Your Changes
Edit the files in your preferred text editor (e.g., VS Code). Keep your edits focused and aligned with the project standards outlined below.

### 5. Test Changes Locally
Always preview your changes in a browser before submitting:
- Open the updated `.html` files in multiple browsers (e.g., Chrome, Firefox, Edge).
- Check the browser developer console (F12) to verify there are no broken links, missing images (404 errors), or syntax warnings.
- Resize the browser window to ensure that layouts adapt fluidly across mobile and desktop viewport widths.

### 6. Commit Your Changes
Write clear, concise commit messages adhering to standard conventions:
```bash
git add .
git commit -m "fix: add descriptive alt text to media gallery icons"
```

### 7. Push and Open a Pull Request
Push your feature branch to your GitHub fork:
```bash
git push origin fix/update-contact-labels
```
Then, navigate to the original repository on GitHub and click **Compare & pull request**. Provide a clear description of the modifications you made, the rationale, and any visual before/after details.

---

## Code Quality Standards

To maintain clean, robust, and accessible code across the entire codebase, all contributions must adhere to the following standards:

### 1. Semantic HTML5 Structure
- Use meaningful HTML5 semantic elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`) to define page regions instead of generic `<div>` containers.
- Structure headings sequentially (`<h1>` through `<h6>`) without skipping levels.

### 2. Valid Element Nesting
- Do not place block-level elements inside inline elements (for example, never place `<p>` or `<div>` inside a `<span>` or an `<a>` element that expects phrasing content).
- Ensure all list items (`<li>`) reside directly inside an `<ol>` or `<ul>` container.
- Ensure all table data cells (`<td>` and `<th>`) reside strictly inside table rows (`<tr>`). Never place line breaks (`<br>`) directly between `<tr>` tags in `<table>`.

### 3. Form Accessibility
- Every form field (`<input>`, `<textarea>`, `<select>`) must have an explicitly associated `<label>` using matching `for` and `id` attributes:
  ```html
  <!-- Correct -->
  <label for="user-email">Email Address:</label>
  <input type="email" id="user-email" name="email" required>
  ```
- Interactive buttons and links must provide clear, self-explanatory text or appropriate `aria-label` attributes for screen readers.

### 4. Descriptive Image Alt Attributes
- All `<img>` tags must include an informative `alt` attribute describing the visual content for assistive technologies:
  ```html
  <!-- Correct -->
  <img src="assets/images/logo1.jpg" alt="Web Development Learning Hub brand logo">
  ```
- Avoid vague placeholders such as `alt="image"`, `alt="photo"`, or leaving `alt` attributes empty unless the graphic is purely decorative.

### 5. Relative Asset Paths Only
- **Never use local machine or drive paths** (such as `C:\...`, `D:\...`, or `file:///...`). These paths break when hosted or viewed on other systems.
- Use relative paths referencing the directory hierarchy:
  - From root pages: `assets/images/logo.jpg` or `assets/css/style.css`
  - From subfolders (`topics/` or `assignments/`): `../assets/images/logo.jpg` or `../assets/css/style.css`

### 6. File and Directory Naming
- Use kebab-case (lowercase letters, numbers, and hyphens) for all filenames and directories (e.g., `assignment-01.html`, `links-and-images.html`).
- **Never include spaces** or special characters in filenames or folder names.

---

## Need Help?

If you encounter any questions or need guidance on proposed changes, feel free to open an Issue on GitHub. Thank you for helping make web development accessible to everyone!
