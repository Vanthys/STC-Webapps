import sqlite3

conn = sqlite3.connect('./database/protein.db')
cur = conn.cursor()

cur.execute('''
CREATE TABLE IF NOT EXISTS proteins (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    sequence TEXT NOT NULL
);
''')

conn.commit()
conn.close()
