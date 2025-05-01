DROP TABLE IF EXISTS blog;
DROP TABLE IF EXISTS projects;

CREATE TABLE blog (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    category TEXT,
    content TEXT NOT NULL,
    created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE projects (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    image_path TEXT,
    image_alt TEXT,
    description TEXT,
    background TEXT,
    features TEXT,
    technologies TEXT,
    source TEXT,
    created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

