const quadrants = Array.from(document.querySelectorAll(".container__quadrant"))
const body = document.getElementsByTagName("body") // background #0C1319
const main = document.getElementsByTagName("main") //opacity .5
const overlay = Array.from(document.getElementsByClassName("container__overlay")) // display flex
const restartButton = document.getElementsByClassName("container__info__restart") 
const overlayWinners = document.getElementsByClassName("container__overlay__title")
const nextRound = document.getElementById("btn_next")
const contWinP1 = document.getElementById("score__player_x")
const contWinP2 = document.getElementById("score__player_o")
const contTies = document.getElementById("score__ties")
const imgWin = document.getElementById("img__winner")
const textWin = document.getElementById("text__winner")
const textWinSecondary = document.getElementById("text__winner__secondary")
const turnX = document.getElementById("icon-x-turn")
const turnO = document.getElementById("icon-o-turn")

turnX.style.opacity = 1
turnO.style.opacity = 0
var scoreP1 = 0
var scoreP2 = 0
var scoreTies = 0
var cont = 0
var xTurn = true
const winCombination = [[0, 1, 2],
[3, 4, 5],
[6, 7, 8],
[0, 3, 6],
[1, 4, 7],
[2, 5, 8],
[0, 4, 8],
[2, 4, 6]]

// Bucle para recorrer los 9 cuadrantes
quadrants.forEach((quadrant, index) =>{ 
    quadrant.addEventListener('click', () => {
        if(xTurn){
            xTurn = false
            const verifyImg = quadrant.querySelector("img")
            if(verifyImg == null){
                const imgElement = document.createElement("img")
                imgElement.setAttribute("src", "./imgs/icon-x.svg")
                quadrant.appendChild(imgElement)
                turnX.style.opacity = 0
                turnO.style.opacity = 1
            }
        }
        else{
            xTurn = true
            const verifyImg = quadrant.querySelector("img")
            if(verifyImg == null){
                const imgElement = document.createElement("img")
                imgElement.setAttribute("src", "./imgs/icon-o.svg")
                quadrant.appendChild(imgElement)
                turnX.style.opacity = 1
                turnO.style.opacity = 0
            }
        }

        cont++

        // Llama a la funcion winCheck para verificar si hay un ganador 
        winCheck()
        
        // Si ocurre un empate
        if (cont === 9 && !winCheck()){
            // Suma puntaje de empate
            scoreTies++
            contTies.innerText = scoreTies
            body[0].style.background = '#0C1319'
            main[0].style.opacity = '.5'
            main[0].style.pointerEvents = 'none'
            overlay[0].style.display = 'flex'
            imgWin.style.display = 'none'
            textWinSecondary.style.display = 'none'
            textWin.innerText = 'ROUND TIED'
            textWin.style.color = '#A8BFC9'
        }
    })
})

// Funcion acerca de toda la logica del juego y estilos
function winCheck() {
    
    const board = quadrants.map(quadrant => quadrant.querySelector("img")?.getAttribute("src") || "");
    for (let i = 0; i < winCombination.length; i++) {
      const combination = winCombination[i];
      const a = combination[0];
      const b = combination[1];
      const c = combination[2];
  
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {

        // Si gana el jugador X
        if(turnX.style.opacity == 0){

            // Elimina los hijos anteriores (img) de las posiciones ganadoras
            const imgBefore = [quadrants[a].querySelector("img"), quadrants[b].querySelector("img"), quadrants[c].querySelector("img")]
            quadrants[a].removeChild(imgBefore[0])
            quadrants[b].removeChild(imgBefore[1])
            quadrants[c].removeChild(imgBefore[2])

            // Crear el primer elemento img
            const imgElementA = document.createElement("img");
            imgElementA.setAttribute("src", "./imgs/icon-x-outline.svg");
            quadrants[a].appendChild(imgElementA);

            // Crear el segundo elemento img
            const imgElementB = document.createElement("img");
            imgElementB.setAttribute("src", "./imgs/icon-x-outline.svg");
            quadrants[b].appendChild(imgElementB);

            // Crear el tercer elemento img
            const imgElementC = document.createElement("img");
            imgElementC.setAttribute("src", "./imgs/icon-x-outline.svg");
            quadrants[c].appendChild(imgElementC);
            
            // Agrega los nuevos hijos (img) a las posiciones ganadoras
            quadrants[a].appendChild(imgElementA)
            quadrants[b].appendChild(imgElementB)
            quadrants[c].appendChild(imgElementC)
            
            // Cambia el color de fondo de las posiciones ganadoras
            quadrants[a].style.background = '#31C4BE'
            quadrants[b].style.background = '#31C4BE'
            quadrants[c].style.background = '#31C4BE'

            // Aperece el overlay ganador (X)
            body[0].style.background = '#0C1319'
            main[0].style.opacity = '.5'
            main[0].style.pointerEvents = 'none'
            overlay[0].style.display = 'flex'
            
            // Cambia la img 
            imgWin.style.display = 'block'
            const imgWinerX = overlayWinners[0].querySelector("img")
            imgWinerX.setAttribute("src", "./imgs/icon-x.svg")

            // Cambia el estilo al "p" ganador
            textWin.style.color = '#31C4BE'
            textWin.innerText = 'TAKES THE ROUND'
            textWinSecondary.style.display = 'block'
            textWinSecondary.innerText = 'YOU WON P1 !!'

            // Suma puntaje
            scoreP1++
            contWinP1.innerText = scoreP1

        }
        // Si gana el jugador O
        else{

            // Elimina los hijos anteriores (img) de las posiciones ganadoras
            const imgBefore = [quadrants[a].querySelector("img"), quadrants[b].querySelector("img"), quadrants[c].querySelector("img")]
            quadrants[a].removeChild(imgBefore[0])
            quadrants[b].removeChild(imgBefore[1])
            quadrants[c].removeChild(imgBefore[2])

            // Crear el primer elemento img
            const imgElementA = document.createElement("img");
            imgElementA.setAttribute("src", "./imgs/icon-o-outline.svg");
            quadrants[a].appendChild(imgElementA);

            // Crear el segundo elemento img
            const imgElementB = document.createElement("img");
            imgElementB.setAttribute("src", "./imgs/icon-o-outline.svg");
            quadrants[b].appendChild(imgElementB);

            // Crear el tercer elemento img
            const imgElementC = document.createElement("img");
            imgElementC.setAttribute("src", "./imgs/icon-o-outline.svg");
            quadrants[c].appendChild(imgElementC);
            
            // Agrega los nuevos hijos (img) a las posiciones ganadoras
            quadrants[a].appendChild(imgElementA)
            quadrants[b].appendChild(imgElementB)
            quadrants[c].appendChild(imgElementC)

            // Cambia el color de fondo de las posiciones ganadoras
            quadrants[a].style.background = '#F2B237'
            quadrants[b].style.background = '#F2B237'
            quadrants[c].style.background = '#F2B237'

            // Aperece el overlay ganador (O)
            body[0].style.background = '#0C1319'
            main[0].style.opacity = '.5'
            main[0].style.pointerEvents = 'none'
            overlay[0].style.display = 'flex'

            // Cambia la img 
            imgWin.style.display = 'block'
            const imgWinerO = overlayWinners[0].querySelector("img")
            imgWinerO.setAttribute("src", "./imgs/icon-o.svg")

            // Cambia estilo al "p" ganador
            textWin.style.color = '#F2B237'
            textWin.innerText = 'TAKES THE ROUND'
            textWinSecondary.style.display = 'block'
            textWinSecondary.innerText = 'YOU WON P2 !!'

            // Suma puntaje
            scoreP2++
            contWinP2.innerText = scoreP2
        }
        return true
      }
    }
    return false;
}

// Funcion para el boton de resetear el juego
function restartGame(){
    cont = 0
    quadrants.forEach((div) => {
        while (div.firstChild) {
            div.removeChild(div.firstChild)
        }
    })
}

// Cada vez que demos click al boton de resetear llamará a la funcion 'restartGame'
restartButton[0].addEventListener('click', () => {
    restartGame()
})

// Evento para cuando un jugador gane y se reinicie el juego
nextRound.addEventListener('click', () => {  
    quadrants.forEach((quadrant) => {
        quadrant.style.background = ''
    })
    body[0].style.background = ''
    main[0].style.opacity = ''
    main[0].style.pointerEvents = ''
    overlay[0].style.display = ''
    restartGame()
})