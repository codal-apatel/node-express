const fs = require('fs');

// Creating a new directory
fs.mkdir('test_directory', (err) => {
    if (err) {
        console.error('Error creating directory:', err);
        return;
    }
    console.log('Directory created successfully');
});

// Writing data to a file
fs.writeFile('test_directory/example.txt', 'Hello, Node.js!', (err) => {
    if (err) {
        console.error('Error writing to file:', err);
        return;
    }
    console.log('Data written to file successfully');
});

// Appending data to a file
fs.appendFile('test_directory/example.txt', '\nThis is appended text.', (err) => {
    if (err) {
        console.error('Error appending to file:', err);
        return;
    }
    console.log('Data appended to file successfully');
});

// Reading data from a file
fs.readFile('test_directory/example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('Data read from file:', data);
});

// Renaming a file
fs.rename('test_directory/example.txt', 'test_directory/newname.txt', (err) => {
    if (err) {
        console.error('Error renaming file:', err);
        return;
    }
    console.log('File renamed successfully');
});

// Deleting a file
fs.unlink('test_directory/newname.txt', (err) => {
    if (err) {
        console.error('Error deleting file:', err);
        return;
    }
    console.log('File deleted successfully');
});

// Removing a directory
fs.rmdir('test_directory', (err) => {
    if (err) {
        console.error('Error removing directory:', err);
        return;
    }
    console.log('Directory removed successfully');
});