# Lotto Number Generator

This document outlines the plan and features for creating a Lotto Number Generator website.

## Overview

The application will be a simple, single-page web application that allows users to generate random lottery numbers. It will be built using HTML, CSS, and JavaScript, following modern web standards and design principles.

## Features

*   **Number Generation:** Generate a set of 6 unique random numbers between 1 and 45.
*   **Display:** Display the generated numbers in a visually appealing way.
*   **User Interface:** A clean and intuitive user interface with a button to trigger the number generation.
*   **Responsive Design:** The layout will adapt to different screen sizes, working on both desktop and mobile devices.

## Plan

1.  **Modify `index.html`:**
    *   Update the title to "Lotto Number Generator".
    *   Create a main container for the application.
    *   Add a title and a brief description.
    *   Add a container to display the generated lottery numbers.
    *   Add a button to generate the numbers.

2.  **Modify `style.css`:**
    *   Apply a modern and visually appealing style to the application.
    *   Use CSS variables for colors and fonts for easy theming.
    *   Style the number display to be clear and readable.
    *   Style the button with a "glow" effect on hover.
    *   Use a responsive design with container queries if necessary.

3.  **Modify `main.js`:**
    *   Implement a function to generate 6 unique random numbers between 1 and 45.
    *   Add an event listener to the "Generate" button.
    *   When the button is clicked, call the number generation function and update the display with the new numbers.
    *   Add a simple animation when the numbers are displayed.
