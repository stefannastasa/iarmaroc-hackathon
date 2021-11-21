class produs():
    def __init__(self, idu, denumire, categorie, cantitate, pret):
        self.__id = idu
        self.__denumire = denumire
        self.__categorie = categorie
        self.__cantitate = cantitate
        self.__pret = pret # pret per kg
    
    
    def getId(self):
        return self.__id
    
    
    def getDenumire(self):
        return self.__denumire

    
    def getCategorie(self):
        return self.__categorie

    
    def getCantitate(self):
        return self.__cantitate

    
    def getPret(self):
        return self.__pret
