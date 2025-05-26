# Portfolio

A fully featured personal portfolio website that offers a preview page of new additions and highlights, easy and dynamic adding of new blog posts and projects, a contact page, and some additional features.

If you're interested in using this layout for yourself, skip down to [Modifications](#modifications).

---

## Table of Contents

- [Modifications](#modifications)  
- [Usage](#usage)  
- [Features](#features)  
- [Questions](#questions)

## Modifications

To personalize your portfolio, start by going into `/frontend/src/pages/Home.tsx` to update your name and position, then into `/frontend/src/pages/AboutMe.tsx` to update your bio and social links.  (Later on, I might move these to a JSON file to streamline the process.)

To add your blog posts and projects, go to `/backend/json/` and update the `projects`, `blog`, and `highlights` JSON files using the same format shown in the repo.  
(These JSON files are used to update the database.)

Before running the application, make sure to fill out the following environment variables:

#### `/backend/.env`:
```
PORTFOLIO_EMAIL = A Gmail account used to send yourself emails  
PORTFOLIO_PASSWORD = The password for the above Gmail account  
MY_EMAIL = Your email where notification messages will be sent  

DATABASE_URL = Internal or external database URL typically used for production  
    OR  
DB_USER = Database user's name  
DB_PASSWORD = Database password  
DB_HOST = Host the database will run on (e.g., "127.0.0.1" for local)  
DB_PORT = "5432" (should typically remain unchanged)
```

> **Note**: For the portfolio password, make sure you're using an **app password**, otherwise it may not work correctly. See [app passwords](https://support.google.com/accounts/answer/185833?hl=en).

#### `/frontend/.env`:
```
VITE_EMAIL = Your personal contact email  
VITE_API_URL = The URL of your backend where the frontend will send requests
```

To update the database with the information you entered in the JSON files, run the following commands from the `/backend` directory:
```
npm run seed;
npm run update-data;
```

The `seed` script resets the database and rebuilds the tables using the schema in the `db` directory. Then, the `update-data` script populates the tables with your input data.

Feel free to make any adjustments, just know that you'll have to update a few files to reflect those changes.

## Usage

Since the application is split into both a frontend and backend, navigate into each directory and install the necessary packages with:
```
npm install;
```

To run the backend (from the `/backend` directory), use:
```
npm run start;
```

A build step runs in `prestart` to compile TypeScript to JavaScript before execution.

To run the frontend (from the `/frontend` directory), use:
```
npm run build;
vite;
```

## Features

- A dynamic preview system that displays new additions and highlights
- A collection of blog posts and projects with dedicated detail pages
- A secure and easy-to-use contact form
- An embedded resume
- Keybinds (1–6) for quick site navigation
- Live GIFs showcasing how projects work
- Scripts to easily update the database using JSON files

## Questions

If you have any questions, feel free to use the contact form on my [website](https://www.danielpodgornyy.com).
