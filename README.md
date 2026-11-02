# Young & Heard Wellness Hub
**Module:** WEDE5020 Web Development (Introduction)
**Assessment:** Formative 2, Part 3: Enhancing Functionality and SEO
**Student:** Nare Felicia Moabelo | **Student number:** ST10519427

---

## 1. Project Overview

Young & Heard Wellness Hub is a youth mental health organisation website for young people aged 13 to 24 in South Africa. The organisation offers peer support circles, school programmes and referral counselling from offices in Johannesburg and Durban.

The website lets visitors learn about the services, view photos, make an enquiry, and contact the organisation. It is designed to feel safe and welcoming, and works on phones, tablets and desktops.

- **Live website:** https://young-and-heard-32cc83.netlify.app/
- **GitHub repository:** https://github.com/feliciamoabelo222-boop/young-and-heard-32cc83

---

## 2. Pages

| Page | Purpose |
|------|---------|
| `index.html` | Home page: hero section, overview of services, call to action |
| `about.html` | About the organisation and its mission |
| `services.html` | Details of peer circles, school programmes and referral counselling |
| `gallery.html` | Photo gallery with lightbox (new in Part 3) |
| `enquiry.html` | Validated enquiry form with cost and availability response |
| `contact.html` | General contact details, maps and a validated message form |

---

## 3. Features Added in Part 3

### 3.1 JavaScript Functionality
- **Responsive hamburger menu** (`js/menu.js`): the navigation collapses into a toggle button on screens 768px and narrower.
- **Gallery with lightbox** (`js/gallery.js`): clicking a photo opens it larger, with previous and next buttons, keyboard arrows, Escape to close, and a fade animation.
- **Interactive maps:** embedded Google Maps for the Johannesburg and Durban offices on the contact page.
- **CSS animations and transitions:** hover zoom on gallery images and fade-in for the lightbox.
- **DOM manipulation:** error messages, the lightbox, the menu and the form responses are all created or changed dynamically with JavaScript.
  

### 3.2 Forms and Validation
**Enquiry form** (`enquiry.html`, `js/enquiry.js`)
- Fields: full name, email, phone number, age, enquiry type, preferred start date, message.
- Validation: required fields, email format, South African phone number format (`0821234567` or `+27821234567`), age between 13 and 24, date cannot be in the past, message between 20 and 500 characters.
- Error messages appear under each field.
- AJAX: after validation, the page uses `fetch` to load `data/services.json` and shows the cost and availability for the chosen enquiry type without reloading the page.

**Contact form** (`contact.html`, `js/contact.js`)
- Fields: full name, email, phone number, message type, message.
- Same style of validation as the enquiry form (message 20 to 1000 characters).
- Once valid, the details are compiled into an email shown on the page. The user can click **Send Email** (a `mailto:` link to `hello@youngandheard.org.za`) or copy the text.

### 3.3 Search Engine Optimisation (SEO)

**On-page SEO**
- **Keyword research:** keywords were chosen using [Google autocomplete / Google Trends / "People also ask"], including: youth mental health South Africa, peer support groups for teens, teen counselling Johannesburg, mental health support Durban, school mental health programmes. [List which keywords are used on which pages.]
- **Title tags and meta descriptions:** every page has a unique title and description.
- **Heading structure:** each page has one `<h1>`, with `<h2>` and `<h3>` used for sections.
- **Image optimisation:** descriptive file names, meaningful `alt` text, compressed images and `loading="lazy"`.
- **URL structure:** short, lowercase file names with hyphens.
- **Internal linking:** pages link to each other within their content as well as in the menu.
- **Mobile-friendliness:** viewport meta tag, media queries, flexible images and a collapsing menu.

**Off-page SEO** (recommendations for the organisation)
- **Backlinks:** partner with schools, youth organisations and NGOs so they link to the site.
- **Social media:** share content on Instagram, TikTok and Facebook where the target audience is active, linking back to the site.
- **Local SEO:** set up a Google Business Profile for each office (Johannesburg and Durban) and list the organisation in local directories.

**Additional**
- `robots.txt` tells search engines which pages they may crawl and points to the sitemap.
- `sitemap.xml` lists all pages to help search engines understand the site structure.
- **Page speed:** compressed images, lazy loading, `defer` on scripts, a single stylesheet.
- **Security:** the site is served over HTTPS by the hosting platform, form input is validated, user input is added to the page using `textContent` where possible, and no private data is stored in the repository.

---

## 4. Responsive Design

Feedback on Part 2 showed the layout and navigation menu were not adapting to different screen sizes. In Part 3 this was fixed with:
- media queries at 900px (tablet) and 768px (phone) in `css/style.css`
- columns that stack on smaller screens
- a hamburger menu for phones
- images set to `max-width: 100%; height: auto`

---

## 5. Technologies Used

- HTML5
- CSS3 (flexbox, grid, media queries)
- JavaScript (ES6), including the `fetch` API for AJAX
- JSON for service data
- Google Maps embeds
- Git and GitHub for version control
- Netlify for hosting
- Visual Studio Code

---

## 6. Project Structure

```
/
├── index.html
├── about.html
├── services.html
├── gallery.html
├── enquiry.html
├── contact.html
├── robots.txt
├── sitemap.xml
├── README.md
├── css/
│   └── style.css
├── js/
│   ├── menu.js
│   ├── gallery.js
│   ├── enquiry.js
│   └── contact.js
├── data/
│   └── services.json
└── images/
```

---

## 7. How to Run the Project

1. Clone or download the repository.
2. Open the folder in Visual Studio Code.
3. Install the **Live Server** extension, right-click `index.html` and choose **Open with Live Server**. (A local server is needed so the enquiry form can load `data/services.json`.)
4. Or visit the live website link above.

---

## 8. Testing

| Test | Result |
|------|--------|
| Menu collapses and opens on a narrow screen | [Pass] |
| Gallery lightbox opens, navigates and closes | [Pass] |
| Enquiry form rejects empty or invalid input | [Pass] |
| Enquiry form shows cost and availability | [Pass] |
| Contact form builds the email | [Pass] |
| All pages checked on phone, tablet and desktop widths | [Pass] |
| PageSpeed Insights score|

---

## 9. Changelog

### Changes made from Part 2 feedback

| Date | File(s) | Change | Reason |
|------|---------|--------|--------|
| [15 September] | `css/style.css` | Added media queries (900px and 768px) so columns stack and the layout adapts to different screen sizes | Feedback: layout was not responsive (0/5) |
| [15 September] | all HTML pages, `js/menu.js`, `css/style.css` | Added a hamburger menu button and script so the navigation collapses on small screens | Feedback: navigation menu did not adapt (0/5) |
| [15 September] | `README.md` | Expanded the README with overview, features, structure, testing and setup information | Feedback: README could be improved |
| [15 September] | `README.md` | Reformatted the reference list in Harvard style | Feedback: references were incorrectly formatted |

### New changes in Part 3

| Date | File(s) | Change |
|------|---------|--------|
| [31 October] | `gallery.html`, `js/gallery.js`, `css/style.css` | Created the gallery page with a lightbox (keyboard support, captions, fade animation) |
| [31 October] | `enquiry.html`, `js/enquiry.js`, `data/services.json` | Added phone number and start date fields, JavaScript validation with error messages, and an AJAX response showing cost and availability |
| [31 October] | `contact.html`, `js/contact.js` | Added a validated contact form that compiles the message into an email with a mailto link |
| [31 October] | all HTML pages | Added unique titles, meta descriptions and keywords; improved image names and alt text; added internal links |
| [31 October] | `robots.txt`, `sitemap.xml` | Created both files with the live website URL |
| [31 October] | deployment | Deployed the website on Netlify |

---

## 10. Known Issues

- None known




## 11. References

Format: Author/Organisation (Year) *Title*. .https://github.com/feliciamoabelo222-boop/young-and-heard-32cc83

- Google Search Central ([2026]) *SEO Starter Guide*. Available at: https://developers.google.com/search/docs/fundamentals/seo-starter-guide (Accessed: 2 November 2026).
- MDN Web Docs ([2026]) *Using the Fetch API*. Available at: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch (Accessed: 2 November 2026).
- MDN Web Docs ([2026]) *Using media queries*. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries (Accessed: 2 November 2026).
- MDN Web Docs ([2026]) *Client-side form validation*. Available at: https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation (Accessed: 2 November 2026).
- Sitemaps.org ([2026]) *Sitemaps XML format*. Available at: https://www.sitemaps.org/protocol.html (Accessed: 2 November 2026).


---

&copy; 2026 Young & Heard Wellness Hub. Created for educational purposes.
