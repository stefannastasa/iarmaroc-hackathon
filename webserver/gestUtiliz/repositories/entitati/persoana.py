
class persoana:
    def __init__(self, nume, prenume, email, telefon, adresa):
        self.__nume = nume
        self.__prenume = prenume
        self.__email = email
        self.__telefon = telefon
        self.__adresa = adresa 

    
    def getNume(self):
        return self.__nume

    def changeNume(self, niu):
        self.__nume = niu

    
    def getPrenume(self):
        return self.__prenume

    def changePrenume(self, niu):
        self.__prenume = niu

    
    def getEmail(self):
        return self.__email

    def changeEmail(self, niu):
        self.__email = niu

    
    def getTelefon(self):
        return self.__telefon

    def changeTelefon(self, niu):
        self.__telefon = niu

    
    def getAdresa(self):
        return self.__adresa

    def changeAdresa(self, niu):
        self.__adresa = niu

    #date personale