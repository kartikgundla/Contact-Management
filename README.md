# Contact Manager

A React-based contact manager app that lets you add, search, and delete contacts with data persistence via localStorage.

## Features

- Add contacts with name and email
- Delete contacts
- Search contacts by name or email in real time
- Data persists on page refresh via localStorage
- Responsive and clean UI

## Tech Stack

- React 18
- React Router v6
- localStorage for data persistence
- CSS (custom styling)
- Vite (dev server)

## Project Structure
```
src/
├── components/
│   ├── App.jsx          # root component, holds all state
│   ├── Header.jsx       # navbar with links
│   ├── ContactList.jsx  # displays list + search bar
│   ├── ContactCard.jsx  # single contact row
│   └── AddContact.jsx   # add contact form
├── App.css              # all styles
└── main.jsx             # entry point
```
## Getting Started

### 1. Clone the repo
git clone https://github.com/kartikgundla/contact-manager.git

### 2. Install dependencies
npm install

### 3. Run the app
npm run dev

### 4. Open in browser
http://localhost:5173

## How It Works

- All state lives in App.jsx
- Data flows down as props, actions flow up via callbacks
- Search filters contacts in real time without touching localStorage
- localStorage only saves when contacts actually change, guarded by a loaded flag to prevent data wipe on first render

## Author

Kartik Gundla  
GitHub: kartikgundla
