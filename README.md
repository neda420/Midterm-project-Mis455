# Midterm Project – MIS 455

A multi-page **Product Store** website built as a midterm project for MIS 455 (Web Development).

## Student Information

| Field | Details |
|-------|---------|
| **Name** | Md Nadimul Islam |
| **Student ID** | 2222063 |
| **Course** | MIS 455 – Web Development |
| **Project** | Midterm Project |

## Project Overview

This is a fully responsive, multi-page e-commerce product store website. It showcases a product catalogue, a contact form with validation, and an about page — all connected by a shared navigation bar and consistent styling.

## Pages

| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Landing page with intro images and featured products |
| Products | `products.html` | Full product grid with "Buy Now" buttons |
| About | `about.html` | About the store and project information |
| Contact | `contact.html` | Contact information and validated message form |

## Features

- **Multi-page navigation** – consistent header/footer across all pages
- **Product catalogue** – grid layout with product images, descriptions, and prices
- **Shopping cart** – "Buy Now" buttons trigger cart notifications (stored in `localStorage`)
- **Contact form** – client-side validation for name, email, and message fields
- **Responsive design** – mobile-friendly layout using CSS media queries
- **Google Fonts** – Roboto and Lobster typefaces

## Technologies Used

- **HTML5** – semantic markup
- **CSS3** – Flexbox, CSS Grid, media queries, animations
- **JavaScript (ES6)** – DOM manipulation, form validation, localStorage

## File Structure

```
Midterm-project-Mis455/
├── index.html        # Home page
├── products.html     # Products page
├── about.html        # About page
├── contact.html      # Contact page
├── style.css         # Shared stylesheet
├── script.js         # JavaScript (cart + form validation)
├── Photots/          # Product and contact images
│   ├── Picture1.png
│   ├── Picture 2.png
│   ├── Picture 3.png
│   ├── Picture 4.png
│   ├── Picture 5.png
│   ├── Picture 6.png
│   ├── Picture7.png
│   └── Contact.png
├── LICENSE
└── README.md
```

## How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/neda420/Midterm-project-Mis455.git
   ```
2. Open `index.html` in any modern web browser — no build step or server required.

## License

This project is licensed under the [MIT License](LICENSE).
