CREATE TABLE users (
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
    name TEXT UNIQUE
)

CREATE TABLE messages (
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
    user_id INTEGER,
    message TEXT,
    timestamp INTEGER
) 
SELECT * FROM messages JOIN users ON messages.user_id = users.id ORDER BY timestamp DESC LIMIT 5