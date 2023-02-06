const express = require('express');
const path = require('path');
const fs = require('fs');
const db = require('./db/db.json');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

// GET Route for notes
app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/notes.html'))

  // Log our request to the terminal
  console.info(`${req.method} request received to get notes route`);
});

// GET request for notes
app.get('/api/notes', (req, res) => {
  // Send a message to the client
  res.json(db);

  // Log our request to the terminal
  console.info(`${req.method} request received to get notes`);
});

app.post('/api/notes', (req, res) => {
  // Log that a POST request was received
  console.info(`${req.method} request received to add a note`);

  const {title, text} = req.body;

  if (title && text) {
    const newNote = {
      title,
      text,
    };

    db.push(newNote);

    fs.writeFile('./db/db.json', JSON.stringify(db, null, 4), (err) =>
      err
        ? console.error(err)
        : console.info(`Review for ${newNote.title} has been written to JSON file`)
    );

    const response = {
      status: 'success',
      body: newNote,
    };

    console.log(response);
    res.status(201).json(response);
  } else {
    res.status(500).json('Error in posting review');
  }
});

// GET Route for home page
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
