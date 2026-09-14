const express = require("express");

const server = express();

// Global Middleware
server.use((req, res, next) => {
    console.log("Global Middleware");
    next();
});

server.use(express.static("public"));

// Route Middleware
const firstMiddleware = (req, res, next) => {
    console.log("First Middleware");
    next();
};

const secondMiddleware = (req, res, next) => {
    console.log("Second Middleware");
    next();
};

// Root Routes
server.get("/", (req, res) => {
    res.send("GET request is working");
});

server.post("/", (req, res) => {
    res.send("POST request is working");
});

server.put("/", (req, res) => {
    res.send("PUT request is working");
});

server.delete("/", (req, res) => {
    res.send("DELETE request is working");
});

// Routes with Middleware
server.get(
    "/send",
    firstMiddleware,
    secondMiddleware,
    (req, res) => {
        res.send("Send route is working");
    }
);

server.get(
    "/send2",
    firstMiddleware,
    secondMiddleware,
    (req, res) => {
        res.send("Send2 route is working");
    }
);

// Start Server
server.listen(8080, () => {
    console.log("Server is listening on port 8080");
});
