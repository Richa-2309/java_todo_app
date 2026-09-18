const express = require("express");

const server = express();

// ===============================
// Built-in Middleware
// ===============================

// Read JSON data from request body
server.use(express.json());

// Serve static files from public folder
server.use(express.static("public"));


// ===============================
// Global Middleware
// ===============================

server.use((req, res, next) => {
    console.log("Global Middleware");
    console.log("Method:", req.method);
    console.log("URL:", req.url);

    next();
});


// ===============================
// Route Middleware
// ===============================

const firstMiddleware = (req, res, next) => {
    console.log("First Middleware");
    next();
};

const secondMiddleware = (req, res, next) => {
    console.log("Second Middleware");
    next();
};


// ===============================
// Root Routes
// ===============================

server.get("/", (req, res) => {
    res.send("GET request is working");
});

server.post("/", (req, res) => {
    console.log(req.body);

    res.json({
        message: "POST request is working",
        data: req.body
    });
});

server.put("/", (req, res) => {
    res.send("PUT request is working");
});

server.patch("/", (req, res) => {
    res.send("PATCH request is working");
});

server.delete("/", (req, res) => {
    res.send("DELETE request is working");
});


// ===============================
// Routes with Middleware
// ===============================

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


// ===============================
// Query Parameters
// Example:
// /user?name=Richa&age=25
// ===============================

server.get("/user", (req, res) => {

    const name = req.query.name;
    const age = req.query.age;

    res.json({
        message: "User details",
        name: name,
        age: age
    });
});


// ===============================
// Route Parameters
// Example:
// /user/101
// ===============================

server.get("/user/:id", (req, res) => {

    const userId = req.params.id;

    res.json({
        message: "User found",
        id: userId
    });
});


// ===============================
// POST API
// ===============================

server.post("/users", (req, res) => {

    const user = req.body;

    console.log("Received User:", user);

    res.status(201).json({
        message: "User created successfully",
        user: user
    });
});


// ===============================
// Route with Multiple Middleware
// ===============================

server.get(
    "/admin",
    firstMiddleware,
    secondMiddleware,
    (req, res) => {

        res.json({
            message: "Welcome to Admin Page"
        });

    }
);


// ===============================
// 404 Middleware
// ===============================

server.use((req, res, next) => {

    res.status(404).json({
        message: "Route not found"
    });

});


// ===============================
// Error Handling Middleware
// ===============================

server.use((err, req, res, next) => {

    console.log("Error:", err.message);

    res.status(500).json({
        message: "Something went wrong"
    });

});


// ===============================
// Start Server
// ===============================

server.listen(8080, () => {
    console.log("Server is listening on port 8080");
});
