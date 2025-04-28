### TODO
---

# Research
    - Express.js
    - React Router
    - Hosting and domain buying
    - Axios

# Stuff to do
    - Contact me form (ALMOST DONE)
    - Storing and pulling project files from json file
    - Storing and pulling blog files from json file
    - Set up path to an individual project file
    - Set up DB
    - Set up highlights and whats new on front page
    - Rewrite about me
    - Add search bar for blogs and projects
    - Host site and buy domain
    - Add current projects
    - Add new article
    - Build article and project pages

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
    - When I enter numbers in the contact form, it moves me to another page
    - When I refresh it flashes white
    - When I refresh, the animation is a bit wack with how the numbers pop in
