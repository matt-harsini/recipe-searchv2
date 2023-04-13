<h1 align="center">recipe-searchv2</h1>
Client-side web application that displays, filters, and sort recipes based on user dietary restrictions and preferences.
<br/>
View site: https://recipe-search-na.netlify.app/

## Features
- Allows users to retrieve a list of ingredients for any meal/similar meals they search and filter/sort recipes based on dietary restrictions.
- Get a full breakdown on nutritional information such as calories, macronutrients and micronutrients.
- Responsive on all screen sizes.

## Getting Started
To set up and run the project locally, follow these steps:

Clone the repository or download the source code.
Install the required dependencies by running npm install or yarn in the project's root directory.
Obtain an API key from the EDAMAM API and add it to your environment variables or application configuration.
Start the development server by running npm run dev or yarn dev. The server will start on http://localhost:5173 by default.
Open your browser and navigate to the server's URL (http://localhost:5173) to view and interact with the application.

## Main Dependencies
- @chakra-ui/react: A set of accessible and modular UI components for React applications.
- @emotion/react: A library for CSS-in-JS styling in React applications.
- @emotion/styled: A styled-component library for Emotion.
- @fontsource/rubik: The Rubik font for use in web projects.
- framer-motion: A library to create animations and transitions in React applications.
- react: The core React library.
- react-dom: The React library for DOM rendering.
- react-icons: A library containing popular icon sets as React components.
- react-intersection-observer: A React hook for the Intersection Observer API.
- react-router-dom: A library for managing routing in React applications.
- recharts: A charting library built on top of React and D3.js.
- sass: A CSS preprocessor for writing structured and maintainable stylesheets.
- Development Dependencies
- @vitejs/plugin-react: The Vite plugin for React applications.
- vite: A build tool and development server for web applications.

## Development Scripts
In the package.json file, the following scripts are available for development:
- dev: Runs the Vite development server, which provides hot module replacement and fast development experience.
- build: Builds the production version of the application using Vite.
- preview: Serves the production build for previewing the application locally.
