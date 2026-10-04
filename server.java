package com.example.music.model;

// Song model class
// This class represents a single song in our music application.
public class Song {

    // Unique ID of the song
    private int id;

    // Name/title of the song
    private String title;

    // Name of the artist/singer
    private String artist;

    // Name of the album
    private String album;

    // Image URL/path for the song
    private String image;

    // Audio file URL/path
    private String file;

    // Duration of the song
    private String duration;


    // Default constructor
    // Required when creating an empty Song object.
    public Song() {
    }


    // Parameterized constructor
    // Used to create a Song object with all details.
    public Song(
            int id,
            String title,
            String artist,
            String album,
            String image,
            String file,
            String duration
    ) {
        this.id = id;
        this.title = title;
        this.artist = artist;
        this.album = album;
        this.image = image;
        this.file = file;
        this.duration = duration;
    }


    // Getter for id
    public int getId() {
        return id;
    }

    // Setter for id
    public void setId(int id) {
        this.id = id;
    }


    // Getter for title
    public String getTitle() {
        return title;
    }

    // Setter for title
    public void setTitle(String title) {
        this.title = title;
    }


    // Getter for artist
    public String getArtist() {
        return artist;
    }

    // Setter for artist
    public void setArtist(String artist) {
        this.artist = artist;
    }


    // Getter for album
    public String getAlbum() {
        return album;
    }

    // Setter for album
    public void setAlbum(String album) {
        this.album = album;
    }


    // Getter for image
    public String getImage() {
        return image;
    }

    // Setter for image
    public void setImage(String image) {
        this.image = image;
    }


    // Getter for audio file
    public String getFile() {
        return file;
    }

    // Setter for audio file
    public void setFile(String file) {
        this.file = file;
    }


    // Getter for duration
    public String getDuration() {
        return duration;
    }

    // Setter for duration
    public void setDuration(String duration) {
        this.duration = duration;
    }
}
