from .persoana import persoana


class user(persoana):
    
    def __init__(self, idu, username, parola, nume, prenume, email, telefon, adresa):
        super().__init__(nume, prenume, email, telefon, adresa)
        __id = idu
        __username = username 
        __parola = parola

    
    def getUsername(self):
        return self.__username

    def changeUsername(self, niu):
        self.__username = niu
    
    def getType(self):
        return self.__type
    
    
    def getParola(self):
        return self.__parola

    def changeParola(self, niu):
        self.__parola = niu