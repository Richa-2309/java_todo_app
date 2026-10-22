// Import the Express framework
const express = require("express");

// Create a new router to define music-related API routes
const router = express.Router();

// Import the required controller functions from musicController.js
const {
    getSongs,          // Get the list of all songs
    getSongById,       // Get a specific song using its ID
    addSong,           // Add a new song to the music collection
    updateSong,        // Update the details of an existing song
    deleteSong,        // Delete a song using its ID
    searchSongs,       // Search songs using a keyword
    getSongsByArtist,  // Get all songs by a specific artist
    getSongStats       // Get statistics about the music collection
} = require("../controllers/musicController");

// Define a GET route to search songs by keyword
// Example: GET /search?keyword=summer
router.get("/search", searchSongs);

// Define a POST route to add a new song
// The request body contains the new song's details
// Example: POST /
router.post("/", addSong);

// Define a GET route to retrieve a song by its ID
// Example: GET /5
router.get("/:id", getSongById);

// Define a PUT route to update an existing song by its ID
// The updated details are sent in the request body
// Example: PUT /5
//let sum=0

router.put("/:id", updateSong);

// Define a DELETE route to remove a song by its ID
// Example: DELETE /5
router.delete("/:id", deleteSong);

// Export the router so it can be used in the main application
module.exports = router;
