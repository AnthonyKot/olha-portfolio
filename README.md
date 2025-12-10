# Portfolio Generator

This is a simple tool to create a beautiful, premium portfolio website.

## How to use

1.  **Edit Content**: Open `src/portfolio.config.js` in any text editor. You can change text, links, and project details there.
2.  **Add Images**: Place your images in the `public/assets` folder. Reference them in the config file using the path `/assets/your-image.jpg`.
3.  **Preview**: Open a terminal in this folder and run `npm run dev`. Open the link shown (usually `http://localhost:5173`) to see your changes in real-time.
4.  **Publish**: When you are happy, run `npm run build`. This creates a `dist` folder. You can drag and drop this `dist` folder into [Netlify Drop](https://app.netlify.com/drop) to publish it for free.

## Customization

-   **Colors**: Edit `src/styles/variables.css` to change the color palette.
-   **Layout**: The structure is defined in `src/App.jsx`.

## Tech Stack

-   React
-   Vite
-   Vanilla CSS (Premium Design System)
