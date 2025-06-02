from flask import Flask, g, request
import sqlite3

app = Flask(__name__)


DATABASE = 'database/protein.db'

# helper to store db globally (singleton)
def get_db():
    db = getattr(g, '_database', None)
    if db is None:
        db = g._database = sqlite3.connect(DATABASE)
    return db

# Making sure we close the db when stopping the server
@app.teardown_appcontext
def close_connection(exception):
    db = getattr(g, '_database', None)
    if db is not None:
        db.close()

    

@app.route("/api/protein")
def get_proteins():
    db = get_db()
    cur = db.cursor()
    cur.execute("SELECT * FROM proteins")
    proteins_list = cur.fetchall() #retrieves a list of lists 
    proteins = []
    for protein in proteins_list:
        proteins.append({'name': protein[1], 'sequence' : protein[2]})
    return proteins

@app.route("/api/protein/<name>")
def get_protein(name):
    db = get_db()
    cur = db.cursor()
    cur.execute("SELECT name, sequence FROM proteins WHERE name LIKE ?", [name])
    result = cur.fetchone() #should return one
    if result:
        return {"sequence": result[1]}
    else:
        return {"error": "Protein not found"}, 404


# uplaoding proteins
@app.route("/api/protein/", methods=["POST"])
def upload_protein():
    data = request.get_json()

    if not data or 'name' not in data or 'sequence' not in data:
        return {"error": "JSON must include 'name' and 'sequence'"}, 400

    name = data['name']
    sequence = data['sequence']

    db = get_db()
    cur = db.cursor()

    try:
        cur.execute("INSERT INTO proteins (name, sequence) VALUES (?, ?)", (name, sequence))
        db.commit()
    except sqlite3.IntegrityError as e:
        return {"error": str(e)}, 400

    return {"message": f"Protein '{name}' added successfully!"}, 201


# For starting more conventional
if __name__ == '__main__':
    app.run(debug=True)