package com.example.music.controller;

import com.example.music.model.Song;
import com.example.music.service.MusicService;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/songs")
@CrossOrigin
public class MusicController {

    private final MusicService musicService;

    public MusicController(MusicService musicService) {
        this.musicService = musicService;
    }

    // GET all songs
    @GetMapping
    public List<Song> getAllSongs() {

        return musicService.getAllSongs();
    }

    // GET song by ID
    @GetMapping("/{id}")
    public ResponseEntity<Song> getSongById(
            @PathVariable int id
    ) {

        Song song =
                musicService.getSongById(id);

        if (song == null) {

            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(song);
    }

    // ADD song
    @PostMapping
    public ResponseEntity<Song> addSong(
            @RequestBody Song song
    ) {

        Song newSong =
                musicService.addSong(song);

        return ResponseEntity.ok(newSong);
    }

    // DELETE song
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteSong(
            @PathVariable int id
    ) {

        boolean deleted =
                musicService.deleteSong(id);

        if (!deleted) {

            return ResponseEntity
                    .notFound()
                    .build();
        }

        return ResponseEntity.ok(
                "Song deleted successfully"
        );
    }
}

