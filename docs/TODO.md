### TODO
---

# Research
    - Express.js
    - React Router
    - Hosting and domain buying

# Stuff to do (URGENCY LEVEL INCLUDED)
    - HIGH
        - Do reading on security best practices
        - Rewrite about me
        - Add current projects and new article
    - MID
        - Host site and buy domain
        - Add tests
        - Add a loading screen
        - Add logging

    - LOW
        - Maybe mess around with coloring
        - Add search bar for blogs and projects (maybe?)

# Notes
    - DB tables
        - (Prob just use JSON for these two) 
            - Projects (use markdown)
            - Blogs
        - Contact form responses
    - Figure out whether to use JSON or DB

    - Use icons to identify projects vs blogs
    - Later, decide if I want to only put the names of projects in my highlights
    - Clean up CSS

# Endpoints
    - /contact
    - /projects (if no params then all, otherwise specify name)
    - /blogs
    - /preview?type=highlights or type=new

# DB Table fields
    - messages
        - name
        - message
        - email
        - timestamp
    - projects
        - name
        - description
        - tags
        - timestamp
    - blogs 
        - name
        - description
        - tags
        - timestamp

# Tests
    - Contact
        - Cant add too many queries
        - Make sure a valid email is used by checking in the backend
        - Use a time out for certain urls

# Bugs
    - When I refresh it flashes white
    - When I refresh, the animation is a bit wack with how the numbers pop in
    - Make test for if theres too many letters in inputs
