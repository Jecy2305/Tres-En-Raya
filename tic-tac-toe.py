def analisis(matriz):
    winningCombination = [[0, 1, 2],
                          [3, 4, 5],
                          [6, 7, 8],
                          [0, 3, 6],
                          [1, 4, 7],
                          [2, 5, 8],
                          [0, 4, 8],
                          [2, 4, 6]]

    for row in winningCombination:
        a = row[0] 
        b = row[1]
        c = row[2]
        for cell in matriz:
            x = cell[0]
            y = cell[1]
            z = cell[2]
            if(a == x and b == y and c == z):
                return True
        

    return False
    


matrix = [[0, 1, 0],
          [3, 9, 5],
          [2, 0, 6]]

if analisis(matrix):
    print("¡Hay una combinación ganadora!")
else:
    print("No hay una combinación ganadora.")
