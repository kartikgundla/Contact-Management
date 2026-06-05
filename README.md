# Contact Manager

A React-based contact manager app that lets you add, search, and delete contacts with data persistence via Supabase.

## Features

- Add contacts with name and email
- Delete contacts
- Search contacts by name or email in real time
- Data persists in Supabase PostgreSQL database
- Responsive and clean UI

## Tech Stack

- React 18
- React Router v6
- Supabase (PostgreSQL database)
- CSS (custom styling)
- Vite (dev server)

## Project Structure

```
src/
├── components/
│   ├── App.jsx              # root component, holds all state
│   ├── Header.jsx           # navbar with links
│   ├── ContactList.jsx      # displays list + search bar
│   ├── ContactCard.jsx      # single contact row
│   ├── AddContact.jsx       # add contact form
│   └── supabaseClient.js    # supabase connection
├── App.css                  # all styles
└── main.jsx                 # entry point
```

## Getting Started

### 1. Clone the repo
```
git clone https://github.com/kartikgundla/contact-manager.git
```

### 2. Install dependencies
```
npm install
```

### 3. Create a `.env` file in the root folder
```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 4. Run the app
```
npm run dev
```

### 5. Open in browser
```
http://localhost:5173
```

## How It Works

- All state lives in App.jsx
- Data flows down as props, actions flow up via callbacks
- Contacts are stored in Supabase PostgreSQL database
- Search filters contacts in real time
- On mount, contacts are fetched from Supabase
- Add and delete operations update Supabase instantly

## Author

Kartik Gundla
GitHub: [kartikgundla](https://github.com/kartikgundla)
