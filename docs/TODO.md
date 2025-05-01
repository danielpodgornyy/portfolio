### TODO
---

# Research
    - Express.js
    - React Router
    - Hosting and domain buying
    - Axios

# Stuff to do (URGENCY LEVEL INCLUDED)
    - HIGH
        - Set up DB
        - Set up highlights and whats new on front page
        - Contact me form (ALMOST DONE)
            - Add a response to when you enter wrong stuff or if you successfully send a message
    - MID
        - Rewrite about me
        - Add current projects and new article
        - Host site and buy domain
        - Add tests
        - Escape input values and validate use express validation
        - Add a loading screen

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
    - Make test for if theres too many ltters in inputs
