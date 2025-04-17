let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");

let newBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn = true;

let winpattern = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
];


// add event listner for click on boxes
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        
        if(turn) {
            box.textContent = "O";
            turn = false;
        }
        else{
            box.textContent = "X";
            turn = true;
        }
        box.disabled = true;
        checkwinner();
    });
});

// create function for reset game
const resetgame = () => {
    turn = true;
    enaboxex();
    msgContainer.classList.add("hide");
}


// creat function for disable button after win
const disboxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

// create function for enable boxes after reset or start new game
const enaboxex = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.textContent = "";
    }
};

// create function for show messages after win
const showWinner = (winner) => {
    msg.textContent = `congratulations , Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disboxes();
};

const checkwinner = () => {
    for (let pattern of winpattern) {
        let pos1 = boxes[pattern[0]].textContent;
        let pos2 = boxes[pattern[1]].textContent;
        let pos3 = boxes[pattern[2]].textContent;

        if(pos1 != "" && pos2 != "" && pos3 != "") {
            if(pos1 === pos2 && pos2 === pos3) {
                
                showWinner(pos1);
            }
        }

    }
};


newBtn.addEventListener("click", resetgame);
resetBtn.addEventListener("click", resetgame);


