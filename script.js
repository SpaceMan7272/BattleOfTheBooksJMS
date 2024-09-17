// script.js

// Function to add an announcement
function addAnnouncement() {
    const announcementInput = document.getElementById('announcement-input');
    const announcementText = announcementInput.value.trim();

    if (announcementText) {
        const announcementList = document.getElementById('announcement-list');
        const newAnnouncement = document.createElement('p');
        newAnnouncement.textContent = announcementText;
        announcementList.appendChild(newAnnouncement);
        announcementInput.value = '';
    } else {
        alert('Please enter an announcement.');
    }
}

// Function to create a reading list table
function createTable() {
    const nameInput = document.getElementById('name-input');
    const name = nameInput.value.trim();

    if (name) {
        const listContainer = document.getElementById('list-container');

        // Create a new table
        const table = document.createElement('table');

        // Create table headers
        const headerRow = document.createElement('tr');
        const nameHeader = document.createElement('th');
        nameHeader.textContent = 'Name';
        headerRow.appendChild(nameHeader);

        const books = ['Book 1', 'Book 2', 'Book 3']; // Add your book list here
        books.forEach(book => {
            const headerCell = document.createElement('th');
            headerCell.textContent = book;
            headerRow.appendChild(headerCell);
        });

        table.appendChild(headerRow);

        // Create table row for the user
        const userRow = document.createElement('tr');
        const nameCell = document.createElement('td');
        nameCell.textContent = name;
        userRow.appendChild(nameCell);

        books.forEach(() => {
            const checkboxCell = document.createElement('td');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkboxCell.appendChild(checkbox);
            userRow.appendChild(checkboxCell);
        });

        table.appendChild(userRow);

        // Append table to the container
        listContainer.appendChild(table);

        // Clear the name input field
        nameInput.value = '';
    } else {
        alert('Please enter your name.');
    }
}
