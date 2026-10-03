
const express = require("express");
const router = express.Router();

// Import controller functions
const {
    getSongs,
    getSongById,
    addSong,
    updateSong,
    deleteSong,
    searchSongs,
    getSongsByArtist,
    getSongStats
} = require("../controllers/musicController");

// Search songs by keyword
router.get("/search", searchSongs);

// Get music statistics
router.get("/stats", getSongStats);

// Get songs by artist
router.get("/artist/:artist", getSongsByArtist);

// Get all songs
router.get("/", getSongs);

// Add a new song
router.post("/", addSong);

// Get a song by ID
router.get("/:id", getSongById);

// Update a song by ID
router.put("/:id", updateSong);

// Delete a song by ID
router.delete("/:id", deleteSong);

// Export router
module.exports = router;

