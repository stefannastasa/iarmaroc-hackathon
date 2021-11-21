import sqlite3 as sql
from entitati.producator import producator

class producat_repo:
    def __init__(self):
        self.__dbname = 'iarmaroc.db'
        con = sql.connect(self.__dbname)

        cursor = con.cursor()

        cursor.execute('''CREATE TABLE producatori (id INTEGER PRIMARY KEY AUTOINCREMENT, 
                                                    username TEXT,
                                                    parola TEXT,
                                                    nume TEXT,
                                                    prenume TEXT,
                                                    email TEXT,
                                                    telefon TEXT,
                                                    adresa TEXT)''')


        con.commit()
        con.close()

    def addProd(self, prod:producator):
        con = sql.connect(self.__dbname)
        cursor = con.cursor()
        cursor.execute('''INSERT INTO producatori (username,nume,prenume,email,telefon,adresa) 
                        VALUES (?,?,?,?,?,?,?)''',(prod.getUsername(),prod.getNume, prod.getPrenume, prod.getEmail, prod.getTelefon, prod.getAdresa))

        con.commit()
        con.close()
        
    def getAll(self):
        con = sql.connect(self.__dbname)
        cursor = con.cursor()
        cursor.execute('''SELECT * FROM producatori ''')
        answer = cursor.fetchall()
        con.commit()
        con.close()

        return answer

a = producat_repo()
prod1 = producator(1,'stefan','asdf','stefan','prenume','a','074123123','strada fericirii')
a.addProd(prod1)

