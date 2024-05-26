# ChatBot React Application

This is a ReactJS web application where users can chat with and get predefined responses. Users can give feedback at each stage of the conversation, and review past conversations. The project is built using Vite, styled with MUI, and hosted on Vercel.

## Overview

This project aims to create an interactive chat application where users can:
- Chat with a mock data (get hardcoded outputs).
- Provide feedback on responses using thumbs up/down.
- Rate the conversation out of 5 at the end.
- Provide subjective feedback at the end of the conversation.
- Save and revisit past conversations.
- View and filter feedback across conversations.

## Technologies Used

- **ReactJS:** Frontend framework.
- **Vite:** Build tool for faster development.
- **MUI:** Material-UI for styling.
- **Axios:** For making HTTP requests.
- **Uniqid:** For generating unique IDs.
- **Vercel:** Hosting platform.

## Installation and Setup

To run the project locally, follow these steps:

1. **Clone the repository:**

   ```sh
   git clone https://github.com/abhishekpatil4/chatBot.git && cd chatBot
    ```
2. **Install dependencies:**

    ```sh
    npm install
    ```
2. **Start the Application:**

    ```sh
    npm run dev
    ```

## Live demo

https://chat-bot-cyan-nine.vercel.app/

## Reasoning Behind Technical Choices

### ReactJS with Vite

- **Reasoning:** ReactJS is a popular and widely-used JavaScript library for building user interfaces, especially single-page applications. It offers component-based architecture, which enhances code reusability and maintainability. Vite was chosen for its fast build times and modern development experience, which speeds up the development process and improves productivity.
- **Benefits:** Fast development, modular code, improved maintainability, and a modern development environment.

### MUI (Material-UI)

- **Reasoning:** MUI provides a comprehensive set of pre-designed, customizable components that follow the Material Design guidelines. This allows for rapid development of a consistent and professional-looking user interface without having to design components from scratch.
- **Benefits:** Consistency in design, rapid UI development, and ease of customization.

### Axios

- **Reasoning:** Axios is a promise-based HTTP client that simplifies making HTTP requests and handling responses. It offers a clean and easy-to-use API, supports request and response interceptors, and is compatible with modern JavaScript features.
- **Benefits:** Simplified HTTP requests, clean API, and better error handling.

### Uniqid

- **Reasoning:** Uniqid is a small library for generating unique IDs. It is used in the project to ensure that each chat message and conversation has a unique identifier, which is essential for managing and rendering these elements accurately in the UI.
- **Benefits:** Ensures unique identification of elements, simple integration, and reliable performance.

### Vercel

- **Reasoning:** Vercel provides an easy-to-use platform for deploying and hosting static sites and serverless functions. It integrates seamlessly with GitHub, enabling continuous deployment and hassle-free hosting.
- **Benefits:** Seamless deployment, continuous integration, and reliable hosting.

### Static JSON Data for AI Responses

- **Reasoning:** Using static JSON data to mock AI responses allowed for the development of the chat functionality without the complexities of integrating a live AI model within the limited timeframe.
- **Benefits:** Simplified development, focused on core functionality, and manageable project scope.

These technical choices were made to ensure a balance between rapid development, maintainability, and a good user experience. They allowed for the creation of a functional and visually appealing chat application within the given constraints, with a clear path for future enhancements.


## Trade-offs and Future Improvements

### Mock AI Responses:

- **Reasoning:** To keep the project scope manageable within the given time frame, I used static JSON data for AI responses instead of integrating a live AI model.
- **Trade-off:** This approach limited the dynamic nature of the chat responses and the realism of the user experience.
- **Future Improvement:** I would use APIs from Large Language Models (LLMs) like ChatGPT or Google Gemini to provide dynamic, context-aware responses.

### No Authentication:
- **Reasoning:** Simplifying the scope by not implementing user authentication allowed me to focus more on the core functionalities and UI/UX of the application.
- **Trade-off:** This decision sacrificed the ability to personalize user experiences and secure user data.
- **Future Improvement:** I would add authentication to enhance security and provide a more personalized experience for users.

### Basic UI Design:
- **Reasoning:** Limited time and focus on functionality over aesthetics resulted in a more basic UI design.
- **Trade-off:** The user interface may not be as visually appealing or intuitive as it could be.
- **Future Improvement:** I would improve the UI to make it more user-friendly and visually appealing, incorporating advanced design principles and user feedback.

### No Database Integration:
- **Reasoning:** Using local state management and mock data was simpler and quicker for development within the given time constraints.
- **Trade-off:** This limited the ability to persist data across sessions and provide robust data management.
- **Future Improvement:** I would integrate a database to store conversations, user feedback, and other relevant data, ensuring data persistence and better management.

### Search Functionality:
- **Reasoning:** Implementing search functionality was deprioritized to focus on core chat and feedback features.
- **Trade-off:** Users cannot search through past responses, which may limit the usability of the conversation history feature.
- **Future Improvement:** I would add a search function to allow users to easily find and review specific responses from past conversations.