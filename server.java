package com.example.music.model;

public class Song {

    private int id;
    private String title;
    private String artist;
    private String album;
    private String image;
    private String file;
    private String duration;

    public Song() {
    }

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

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getArtist() {
        return artist;
    }

    public void setArtist(String artist) {
        this.artist = artist;
    }

    public String getAlbum() {
        return album;
    }

    public void setAlbum(String album) {
        this.album = album;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getFile() {
        return file;
    }

    public void setFile(String file) {
        this.file = file;
    }

    public String getDuration() {
        return duration;
    }

    public void setDuration(String duration) {
        this.duration = duration;
    }
}
