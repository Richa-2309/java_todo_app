
package com.example.todo.model;

/**
 * Represents a Todo item.
 */
public class Todo {

    // Unique identifier for the todo
    private Integer id;

    // Short title of the todo
    private String title;

    // Detailed description of the todo
    private String description;

    // Indicates whether the todo is completed
    private Boolean completed;

    /**
     * Default constructor.
     */
    public Todo() {
    }

    /**
     * Creates a Todo with all properties.
     *
     * @param id          unique todo identifier
     * @param title       todo title
     * @param description todo description
     * @param completed   completion status
     */
    public Todo(Integer id, String title, String description, Boolean completed) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.completed = completed;
    }

    /**
     * Returns the todo ID.
     *
     * @return todo ID
     */
    public Integer getId() {
        return id;
    }

    /**
     * Returns the todo description.
     *
     * @return todo description
     */
    public String getDescription() {
        return description;
    }

    /**
     * Updates the todo description.
     *
     * @param description new todo description
     */
    public void setDescription(String description) {
        this.description = description;
    }

    /**
     * Returns the completion status.
     *
     * @return true if completed, otherwise false
     */
    public Boolean getCompleted() {
        return completed;
    }

    /**
     * Updates the completion status.
     *
     * @param completed new completion status
     */
    public void setCompleted(Boolean completed) {
        this.completed = completed;
    }
}


// ### Important observation

// Your `title` field currently has **no getter or setter** because you commented them out:
// ### Important observation

// Your `title` field currently has **no getter or setter** because you commented them out:


// public String getTitle() {
//     return title;
// }

// So if your controller/service needs to access the title, you'll need:


public String getTitle() {
    return title;
}

public String putTitle() {
    return title;
}

public void setTitle(String title) {
    this.title = title;
}


