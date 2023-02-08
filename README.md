# note-taker

An application called Note Taker that can be used to write and save notes. This application will use an Express.js back end and will save and retrieve note data from a JSON file.

## User Story

```
AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete
```

## Acceptance Criteria

```
GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a Save icon appears in the navigation at the top of the page
WHEN I click on the Save icon
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column
WHEN I click on the Write icon in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column
```

## Usage
* Launch Note taker by opening https://sheltered-island-22588.herokuapp.com/ in a web browser
* Click on Get Started to open the notes page
  ![Landing page](./Develop/public/assets/images/landingPage.png)
* Saved notes will appear in the left hand column
  ![Notes page](./Develop/public/assets/images/notesPage.png)
* Add a new note by filling in the note title and text in the right column
* When the note text is added, the save ICON will appear in the navigation bar
  ![New note](./Develop/public/assets/images/newNote.png)
* Press the save icon to save the note
* View old notes by clicking on a note listed in the left column
  ![Old note](./Develop/public/assets/images/oldNote.png)
* Click the new note icopn (+) to add a new note
* Click on Note Taker in the navigation bar to return to the landing page
