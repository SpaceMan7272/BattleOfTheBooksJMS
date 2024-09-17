// script.js

// Function to add an announcement
function addAnnouncement() {
    const announcementInput = document.getElementById('announcement-input');
    const announcementText = announcementInput.value.trim();

    if (announcementText) {
        // Get the current announcements from localStorage
        let announcements = JSON.parse(localStorage.getItem('announcements')) || [];
        
        // Add the new announcement to the array
        announcements.push(announcementText);
        
        // Save the updated array back to localStorage
        localStorage.setItem('announcements', JSON.stringify(announcements));
        
        // Update the announcement list on the page
        displayAnnouncements();
        
        // Clear the input field
        announcementInput.value = '';
    } else {
        alert('Please enter an announcement.');
    }
}

// Function to display announcements
function displayAnnouncements() {
    const announcementList = document.getElementById('announcement-list');
    announcementList.innerHTML = '';

    // Retrieve announcements from localStorage
    const announcements = JSON.parse(localStorage.getItem('announcements')) || [];

    // Create a paragraph element for each announcement
    announcements.forEach(announcement => {
        const newAnnouncement = document.createElement('p');
        newAnnouncement.textContent = announcement;
        announcementList.appendChild(newAnnouncement);
    });
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

        // Save the table to localStorage
        let readingLists = JSON.parse(localStorage.getItem('readingLists')) || [];
        readingLists.push(table.outerHTML);
        localStorage.setItem('readingLists', JSON.stringify(readingLists));

        // Update the list container
        displayReadingLists();

        // Clear the name input field
        nameInput.value = '';
    } else {
        alert('Please enter your name.');
    }
}

// Function to display reading lists
function displayReadingLists() {
    const listContainer = document.getElementById('list-container');
    listContainer.innerHTML = '';

    // Retrieve reading lists from localStorage
    const readingLists = JSON.parse(localStorage.getItem('readingLists')) || [];

    // Append each table to the container
    readingLists.forEach(listHTML => {
        const div = document.createElement('div');
        div.innerHTML = listHTML;
        listContainer.appendChild(div);
    });
}

// Initial display of data
window.onload = function() {
    displayAnnouncements();
    displayReadingLists();
}
