// script.js

// Function to add a new announcement
function addAnnouncement() {
    const announcementInput = document.getElementById('announcement-input');
    const announcementText = announcementInput.value.trim();

    if (announcementText) {
        const announcementList = document.getElementById('announcement-list');
        const newAnnouncement = document.createElement('p');
        newAnnouncement.textContent = announcementText;
        announcementList.appendChild(newAnnouncement);
        announcementInput.value = ''; // Clear the input
    } else {
        alert('Please enter an announcement.');
    }
}

// Function to create a new reading list table
function createTable() {
    const nameInput = document.getElementById('name-input');
    const name = nameInput.value.trim();

    if (name) {
        const listContainer = document.getElementById('list-container');
        const table = document.createElement('table');
        const headerRow = document.createElement('tr');
        const headerCell1 = document.createElement('th');
        const headerCell2 = document.createElement('th');
        const headerCell3 = document.createElement('th');

        headerCell1.textContent = 'Book Title';
        headerCell2.textContent = 'Read';
        headerCell3.textContent = 'Date Read';

        headerRow.appendChild(headerCell1);
        headerRow.appendChild(headerCell2);
        headerRow.appendChild(headerCell3);
        table.appendChild(headerRow);

        // Example rows for the table
        const books = [
            'Ashlords', 'The Best at It', 'Beyond the Bright Sea', 'Bloom', 'The Boy Who Harnessed the Wind', 'The Bridge Home', 'Freewater', 'Ghost', 'A Good Kind of Trouble', 'I Must Betray You', 'I Will Always Write Back', 'The Lost Year', 'Maybe He Just Likes You', 'Mexikid', 'Paper Things', 'Roller Girl', 'The Screaming Staircase', 'Simon Sort of Says', 'Song for a Whale', 'A Wish in the Dark'
        ];

        books.forEach(book => {
            const row = document.createElement('tr');
            const cell1 = document.createElement('td');
            const cell2 = document.createElement('td');
            const cell3 = document.createElement('td');
            
            cell1.textContent = book;
            cell2.innerHTML = '<input type="checkbox">';
            cell3.innerHTML = '<input type="date">';
            
            row.appendChild(cell1);
            row.appendChild(cell2);
            row.appendChild(cell3);
            table.appendChild(row);
        });

        // Add name of user at the top of the table
        const userRow = document.createElement('tr');
        const userNameCell = document.createElement('td');
        userNameCell.colSpan = 3;
        userNameCell.textContent = `List for: ${name}`;
        userNameCell.style.fontWeight = 'bold';
        userRow.appendChild(userNameCell);
        table.insertBefore(userRow, table.firstChild);

        listContainer.appendChild(table);
        nameInput.value = ''; // Clear the input
    } else {
        alert('Please enter your name.');
    }
}
