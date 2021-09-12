
# inputFile = input("Hier in HTML umzuwandelnde Textdatei eingeben:")

#def absatzInBr(inputFile):
    #file = open(inputFile)

    #line = file.read().replace("\n", "<br>")
    #file.close()

    #print(line)

#makeAbsatzInBr("Daphne.txt")



import os


​
​
inputFolder = "C:/Users/katha/OneDrive/1_Uni/2_MA/14_SoSe_2021/Masterarbeit/ProbeWebsite/Metamorphosen_Textdateien"
outputFolder = "C:/Users/katha/OneDrive/1_Uni/2_MA/14_SoSe_2021/Masterarbeit/ProbeWebsite/Metamorphosen_Textdateien"
​
​
​
def replaceAbsatzWithBr(file_in, file_out):
   
    with open(file_in, "r", encoding="utf8") as file_in:        #sonst muss file mit close() wieder geschlossen werden
        with open(file_out, "w", encoding="utf8") as file_out:
            
            file_out = file_in.read().replace("\n", "<br>")​

​
​​
for filename in os.listdir(inputFolder): #Scheife über alle Dateien im Ordner
    inputFilepath = inputFolder + "/" + filename #Kompletter Pfad
    outputFilepath = outputFolder + "/" + filename + "_mitBr" #Kompletter Pfad
    if os.path.isfile(inputFilepath) and inputFilepath.endswith(".txt"): #Überprüfen ob es eine Datei und kein Ordner ist bzw. ob es sich auch um eine Txt-Datei handelt 
        replace(inputFilepath, outputFilepath)