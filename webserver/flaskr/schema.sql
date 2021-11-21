DROP TABLE IF EXISTS user;
DROP TABLE IF EXISTS producator;
DROP TABLE IF EXISTS consumator;

CREATE TABLE user (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    ProdId INTEGER,
    ConsId INTEGER,
    FOREIGN KEY (ProdId) REFERENCES producator(ProdId),
    FOREIGN KEY (ConsId) REFERENCES consumator(ConsId)
);

CREATE TABLE producator (
    ProdId INTEGER PRIMARY KEY AUTOINCREMENT,
    nume TEXT NOT NULL,
    prenume TEXT NOT NULL, 
    email TEXT UNIQUE NOT NULL,
    telefon TEXT UNIQUE NOT NULL,
    adresa TEXT NOT NULL
);

CREATE TABLE consumator (
    ConsId INTEGER PRIMARY KEY AUTOINCREMENT,
    nume TEXT NOT NULL,
    prenume TEXT NOT NULL, 
    email TEXT UNIQUE NOT NULL,
    telefon TEXT UNIQUE NOT NULL,
    adresa TEXT NOT NULL
);
INSERT INTO user
VALUES (0,"andrei", "asdfadga", 10,5);