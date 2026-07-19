# AKL Editor | Academic Words Improver

A lightweight, single-file frontend writing assistant designed to elevate academic drafts. Powered by the **Gemini 2.5-flash API** and an embedded **Academic Keyword List (AKL) Database**, this editor intelligently upgrades vocabulary while strictly preserving part-of-speech (POS) tags, grammatical structure, and semantic coherence.

---

## Key Features

* **Strict POS Enforcer:** Built-in categorization for nouns, verbs, adjectives, and adverbs from the AKL. The AI engine is heavily constrained to swap words *only* within their respective lists. Verbs dynamically adjust to correct tenses, and nouns adapt to plural/singular context automatically.
* **Semantic Flow Aware:** Implements native prompt guardrails preventing the AI from introducing jarring or unnatural word substitutions just for the sake of modification. If an upgrade breaks the academic tone, the original phrasing is kept.
* **Interactive Review Panel:**
* **Hover Effect:** Dynamic CSS tooltips display the original word, its POS tag, and a dual-translation mapping (`Original (POS) ➤ Chinese`).
* **Click-to-Revert:** Dislike a suggestion? Click any highlighted span to instantly toggle between the original and upgraded token. The modification counter updates in real time.


* **Clean Copy Integration:** One-click script copies the refined text directly to the clipboard while stripping away all presentation HTML elements (like `<span>` tags), leaving you with flawless markdown/plain text.
* **Serverless & Private:** Entirely client-side architecture. Your Gemini API key is securely retained within your browser's local storage (`localStorage`) and never touches a third-party server.

---

## Tech Stack

* **Frontend UI:** Semantic HTML5, Responsive CSS3 Grid layout, CSS Custom Variables, and dynamic pseudo-element tooltips.
* **Typography:** Google Fonts (`Inter` for slick system interface elements, `Lora` for an optimized reading experience).
* **Core Logic:** Vanilla JavaScript utilizing native Async/Fetch APIs, event delegation, and real-time DOM manipulation.
* **AI Inference:** Google Gemini API endpoint (`gemini-2.5-flash` model).

---

## Quick Start

### 1. Local Execution

Because this application is self-contained in a single HTML document, there is no need to configure complex local runtime environments (like Node.js):

1. Copy the source code from `index.html`.
2. Create a local file named `index.html` on your filesystem and paste the content inside.
3. Launch the file by double-clicking it or serving it via VS Code's **Live Server** extension.

### 2. Connect the API Key

1. Upon first loading the page, a **Configuration** modal will prompt you for your authorization credentials.
2. Paste your private **Gemini API Key**.
3. Click **Start Editor**. The token will stay saved in your current browser instance.

---

### Database Composition (AKL_DB)

The script holds hardcoded string configurations mapped to high-utility vocabulary pools:

* **NOUNS:** `abstract`, `analysis`, `approach`, `core`, `framework`, `hypothesis`...
* **VERBS:** `acquire`, `analyze`, `demonstrate`, `evaluate`, `formulate`...
* **ADJECTIVES & ADVERBS:** `considerable`, `empirical`, `subsequently`, `virtually`...

---

## Theme Customization

To align the editor interface with your current workstation styling, tweak the global variables inside the CSS definition block:

```css
:root { 
    --primary: #0f172a;      /* Deep UI slate tone */
    --accent: #b91c1c;       /* Highlight alert/red accent */
    --bg: #f8fafc;           /* Light canvas backing */
    --surface: #ffffff;      /* Main editor card color */
    --highlight: #fee2e2;    /* Faded background blend for text */
}

```

## License

This project is licensed under the **GNU General Public License v3 (GPL-v3)**.
