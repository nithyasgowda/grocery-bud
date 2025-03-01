## Overview

The Grocery List App is a simple and efficient React-based application that allows users to manage their grocery lists. Users can add, remove, and mark items as completed, with all data being stored in localStorage to persist across sessions.


## Features

- Add Items: Users can add grocery items to the list.
- Prevent Duplicates: The app prevents adding duplicate items and displays a notification.
- Remove Items: Users can delete items from the list.
- Mark as Completed: Users can check/uncheck items to mark them as completed.
- Local Storage: The list persists even after page refresh.
- User Notifications: Toast messages inform users of their actions.


## Technologies Used

- React + Vite: Fast and modern development setup

- React Hooks: useState for state management

- React Toastify: User-friendly notifications
```sh
npm i react-toastify
```

- Nanoid: Unique ID generation
```sh
npm i nanoid
```
- Local Storage: Persistent data management


## Installation

Prerequisites:
- Ensure you have Node.js and npm installed on your system.

Steps:
- Clone the repository
- git clone https://github.com/nithyasgowda/grocery-bud.git
- cd grocery-bud

Install dependencies:
```sh
npm install
```

Start the development server:
```sh
npm run dev
```

Open your browser and visit: http://localhost:5173


## File Structure
📂 grocery-bud
│── 📂 src
│   ├── 📂 assets        # Images and media files
│   │   ├── largeBgImage.jpg
│   │   ├── smallBgImage.jpg
│   │   ├── logo.png
│   ├── 📄 App.jsx        # Main component
│   ├── 📄 Form.jsx       # Handles user input
│   ├── 📄 Items.jsx      # Displays the grocery list
│   ├── 📄 SingleItem.jsx # Represents a single grocery item
│   ├── 📄 App.css        # Styles for the application
│   ├── 📄 main.jsx       # Application entry point
│── 📄 index.html       # HTML structure
│── 📄 README.md        # Project documentation
│── 📄 package.json     # Project dependencies
│── 📄 vite.config.js   # Vite configuration


## Usage
- Enter an item in the input field and click Add.
- Click on an item to mark it as completed.
- Click the Remove button to delete an item.
