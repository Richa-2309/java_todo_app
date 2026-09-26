package com.example.music;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class MusicSystemApplication {

    public static void main(String[] args) {

        SpringApplication.run(
                MusicSystemApplication.class,
                args
        );

        System.out.println(
                "Music System Server Started!"
        );

        System.out.println(
                "Server running at: http://localhost:8080"
        );
    }
}
