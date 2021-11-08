// Background Music
const gamemusic = new Audio ("music.mp3")
// Gameover Sound
const winningmusic = new Audio ("gameover.mp3")
// Turn change
const turnchange = new Audio ("ting.mp3")
let turn = "X";
let image = document.querySelector(".img").getElementsByTagName("img")[0]
let box = document.querySelectorAll(".box")
// let box = document.getElementsByClassName("box");
let textbox = document.getElementsByClassName('boxtext');
console.log(image)
console.log(box)
let gameover = false;

const changeTurn = ()=>{
    return turn === "X" ? "O": "X"
};
const checkwinner = () => {
    // let textbox = document.getElementsByClassName('boxtext');    
    const WINNING_COMBINATIONs = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ]
      WINNING_COMBINATIONs.forEach(e => {
          if((textbox[e[0]].innerText === textbox[e[1]].innerText) && (textbox[e[2]].innerText === textbox[e[1]].innerText) && (textbox[e[0]].innerText !== "")){
              document.querySelector(".info").innerText = textbox[e[0]].innerText + " Won";
              winningmusic.play()
              gameover = true;
            //   let box = document.querySelectorAll(".box")
          }
      })
}
// const changedisplay = () => {
//     if (gameover){
//         // image.classList.add("showimage")
//         // let img = document.querySelector(".showimage")
//         // console.log(img)
//         winningmusic.play()
        // let box = document.querySelectorAll(".box").style.display="none"
//         // image.style.display="block"
//     }
// }

// Game Logic

// background Music
// gamemusic.play();

// let boxes = document.getElementsByClassName("box");
Array.from(box).forEach((element) => {
    let textbox = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if (textbox.innerText === ''){
            textbox.innerText = turn;
            turn = changeTurn();
            turnchange.play();
            checkwinner();
            if (!gameover){
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn
            }
        }
    })
})
// const changedisplay = () => {
//     if (gameover){
//         // image.classList.add("showimage")
//         // let img = document.querySelector(".showimage")
//         // console.log(img)
//         // winningmusic.play()
//         // let box = document.querySelectorAll(".box").style.display="none"
//         // image.style.display="block"
//     }
// }

     // Restart button
reset.addEventListener('click', ()=>{
    let textbox = document.querySelectorAll('.boxtext');
    console.log(textbox);
    Array.from(textbox).forEach(element => {
        element.innerText = '';
        gameover = false;
        turn = "X"
        document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    });
})

// let img = document.querySelector("#img")
// let box = document.querySelectorAll(".box")
// console.log(box)
// Array.from(box).forEach((box) => {
//     console.log(box)
//     if(gameover){
        // winningmusic.play()
        // box.style.display="none"
        // img.style.display="none"
//     }
//     else{
//         box.style.display="block"
//         img.style.display="block"
//     }
// })