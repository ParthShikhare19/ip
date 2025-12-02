# Simple Full Stack Project

A simple full-stack web application with:
- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js with Express.js

## Features

- View all items
- Add new items
- Delete items
- RESTful API endpoints
- Responsive design

## Setup Instructions

1. Install dependencies:
```bash
npm install
```

2. Start the server:
```bash
npm start
```

3. Open your browser and navigate to:
```
http://localhost:3000
```

## API Endpoints

- `GET /api/items` - Get all items
- `GET /api/items/:id` - Get single item
- `POST /api/items` - Create new item
- `PUT /api/items/:id` - Update item
- `DELETE /api/items/:id` - Delete item

## Project Structure

```
exp10/
├── server.js          # Express backend server
├── package.json       # Project dependencies
├── public/            # Frontend files
│   ├── index.html     # Main HTML file
│   ├── styles.css     # CSS styling
│   └── script.js      # Client-side JavaScript
└── README.md          # This file
```

## Technologies Used

- **Backend**: Express.js, CORS
- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **HTTP Client**: Fetch API
