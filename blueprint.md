# Lotto Number Generator - Blueprint

## Overview
A modern, framework-less Lotto Number Generator with a sleek UI, theme support, and full responsiveness across mobile, tablet, and desktop.

## Features
- **Lotto Number Generator:** Generates 6 unique numbers from 1 to 45, sorted in ascending order.
- **Partnership Inquiry Form:** 
    - A simple and elegant form for potential partners to reach out.
    - Powered by **Formspree** for reliable email delivery.
- **Modern & Responsive UI:** 
    - Works perfectly on iPhone, Android, iPad, and Desktop.
    - Adaptive layouts using CSS Media Queries.
    - Touch-friendly buttons and interactive elements.
- **Theme Support:** Toggle between Dark and Light modes with `localStorage` persistence.
- **Copy to Clipboard:** Easily copy generated numbers to the clipboard.
- **Animations:** Smooth "pop-in" animations for number display.

## Technical Details
- **HTML5:** Semantic structure with viewport meta tag for mobile optimization.
- **CSS3:** 
    - Modern CSS Variables for theming.
    - Flexbox and Grid for flexible layouts.
    - Media Queries for breakpoints (Mobile < 480px, Tablet/Desktop > 768px).
    - Smooth transitions and keyframe animations.
- **JavaScript (ES6+):** 
    - `navigator.clipboard` API for copying.
    - `localStorage` for theme persistence.
    - Event-driven logic for number generation and UI updates.
- **Formspree Integration:** Secure and easy-to-configure form handling without a backend.


## Development History
- **Initial Setup:** Basic structure and Lotto logic.
- **GitHub Integration:** Remote repository connected.
- **Theme Support:** Dark/Light mode toggle implemented.
- **Responsive Optimization:** Added media queries, touch-friendly UI, and Copy feature.
- **Partnership Form:** Added Formspree-powered inquiry form.
