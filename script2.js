// Filling the board with squares
(()=>{
    const container = document.querySelector('.container') 
    const boardDiv = document.createElement('div') 
    boardDiv.classList.add('board')
    container.appendChild(boardDiv)

    const fillBoard = () => {
        for(let i=0;i<3;i++){
            for(let k=0;k<3;k++){
                let square = document.createElement('div')
                square.classList.add('square')
                square.setAttribute('data-row',i)
                square.setAttribute('data-cell',k)
                boardDiv.appendChild(square)
            }
        }
    }

    fillBoard()
})()

// Game controller
const gameController = (()=>{
    let boardArray = [['','',''],['','',''],['','','']]
    const squares = document.querySelectorAll('.square')
    let sign = 'x'
    
    // Hooking up clickability to squares
    const squareFunctionality = () =>{
        squares.forEach(square => {
            square.addEventListener('click',(e)=>{
                let row = e.target.getAttribute('data-row')
                let cell = e.target.getAttribute('data-cell')
                console.log(boardArray[row][cell])
                fillCell(sign,row,cell)
            })
        })
    }

    // Displaying array
    const displayArray = ()=>{
        squares.forEach(square=>{
            let row = square.getAttribute('data-row')
            let cell = square.getAttribute('data-cell')
            square.textContent = boardArray[row][cell]
        })
    }


    squareFunctionality()

    // Filling array cell
    const fillCell = (mark,row,cell) => {
        boardArray[row][cell] = mark
        mark == 'x' ? sign = 'o' : sign = 'x'
        displayArray()
    }

    
    return {fillCell}
})()