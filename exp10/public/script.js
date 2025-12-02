const API_URL = 'http://localhost:3000/api';

// Load items when page loads
document.addEventListener('DOMContentLoaded', () => {
    loadItems();
    setupFormHandler();
});

// Load all items from API
async function loadItems() {
    const itemsList = document.getElementById('itemsList');
    
    try {
        const response = await fetch(`${API_URL}/items`);
        const result = await response.json();
        
        if (result.success && result.data.length > 0) {
            displayItems(result.data);
        } else {
            itemsList.innerHTML = '<p class="loading">No items found. Add one above!</p>';
        }
    } catch (error) {
        console.error('Error loading items:', error);
        itemsList.innerHTML = '<p class="error">Failed to load items. Make sure the server is running.</p>';
    }
}

// Display items in the UI
function displayItems(items) {
    const itemsList = document.getElementById('itemsList');
    
    itemsList.innerHTML = items.map(item => `
        <div class="item-card" data-id="${item.id}">
            <div class="item-header">
                <span class="item-name">${escapeHtml(item.name)}</span>
                <span class="item-id">ID: ${item.id}</span>
            </div>
            <p class="item-description">${escapeHtml(item.description)}</p>
            <div class="item-actions">
                <button class="btn btn-danger" onclick="deleteItem(${item.id})">Delete</button>
            </div>
        </div>
    `).join('');
}

// Setup form submission handler
function setupFormHandler() {
    const form = document.getElementById('addItemForm');
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const name = document.getElementById('itemName').value;
        const description = document.getElementById('itemDescription').value;
        
        await addItem(name, description);
        
        // Clear form
        form.reset();
    });
}

// Add new item via API
async function addItem(name, description) {
    try {
        const response = await fetch(`${API_URL}/items`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, description })
        });
        
        const result = await response.json();
        
        if (result.success) {
            showMessage('Item added successfully!', 'success');
            loadItems(); // Reload items list
        } else {
            showMessage('Failed to add item', 'error');
        }
    } catch (error) {
        console.error('Error adding item:', error);
        showMessage('Error adding item. Check console for details.', 'error');
    }
}

// Delete item via API
async function deleteItem(id) {
    if (!confirm('Are you sure you want to delete this item?')) {
        return;
    }
    
    try {
        const response = await fetch(`${API_URL}/items/${id}`, {
            method: 'DELETE'
        });
        
        const result = await response.json();
        
        if (result.success) {
            showMessage('Item deleted successfully!', 'success');
            loadItems(); // Reload items list
        } else {
            showMessage('Failed to delete item', 'error');
        }
    } catch (error) {
        console.error('Error deleting item:', error);
        showMessage('Error deleting item. Check console for details.', 'error');
    }
}

// Show temporary message
function showMessage(message, type) {
    const itemsList = document.getElementById('itemsList');
    const messageDiv = document.createElement('div');
    messageDiv.className = type;
    messageDiv.textContent = message;
    
    itemsList.insertBefore(messageDiv, itemsList.firstChild);
    
    setTimeout(() => {
        messageDiv.remove();
    }, 3000);
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}
