const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Sample data
let items = [
  { id: 1, name: 'Item 1', description: 'This is item 1' },
  { id: 2, name: 'Item 2', description: 'This is item 2' },
  { id: 3, name: 'Item 3', description: 'This is item 3' }
];

// API Routes
// Get all items
app.get('/api/items', (req, res) => {
  res.json({ success: true, data: items });
});

// Get single item
app.get('/api/items/:id', (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id));
  if (item) {
    res.json({ success: true, data: item });
  } else {
    res.status(404).json({ success: false, message: 'Item not found' });
  }
});

// Create new item
app.post('/api/items', (req, res) => {
  const newItem = {
    id: items.length + 1,
    name: req.body.name,
    description: req.body.description
  };
  items.push(newItem);
  res.status(201).json({ success: true, data: newItem });
});

// Update item
app.put('/api/items/:id', (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id));
  if (item) {
    item.name = req.body.name || item.name;
    item.description = req.body.description || item.description;
    res.json({ success: true, data: item });
  } else {
    res.status(404).json({ success: false, message: 'Item not found' });
  }
});

// Delete item
app.delete('/api/items/:id', (req, res) => {
  const index = items.findIndex(i => i.id === parseInt(req.params.id));
  if (index !== -1) {
    items.splice(index, 1);
    res.json({ success: true, message: 'Item deleted' });
  } else {
    res.status(404).json({ success: false, message: 'Item not found' });
  }
});

// Serve frontend
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
