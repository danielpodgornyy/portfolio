DROP TABLE IF EXISTS blog;
DROP TABLE IF EXISTS projects;

CREATE TABLE blog (
    name TEXT NOT NULL,
    category TEXT,
    description TEXT,
    content TEXT NOT NULL,
    created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT blog_pk PRIMARY KEY (name)
);

CREATE TABLE projects (
    name TEXT NOT NULL,
    image_path TEXT,
    image_alt TEXT,
    category TEXT,
    description TEXT,
    background TEXT,
    features TEXT,
    technologies TEXT,
    live TEXT,
    source TEXT,
    created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT projects_pk PRIMARY KEY (name)
);

