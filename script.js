const canv = document.querySelector("#canv");
const stbyst = document.querySelector("#start");
const threetwo = document.querySelector("#threetwo");
const cleartable = document.querySelector("#clear");
const customSize = document.querySelector("#customSize");
const customEnter = document.querySelector("#customEnter");
const blackColor = document.querySelector("#black");
const rainbowColor = document.querySelector("#rainbow");

let boxNum = 0;
let draw = false;
let black = true;
let rainbow = false;

const colorChange = (a) => {
    if(black == true) {
    a.style.backgroundColor = `black`;
    } else if (rainbow == true){
    const random = () => Math.floor(Math.random() * 255);
    a.style.backgroundColor = `rgb(${random()},${random()},${random()})`;
    }
}

const gridMade = () => {
const boxesId = document.querySelectorAll(".drawbox");

boxesId.forEach((i) =>
i.addEventListener("mouseover", e => colorChange(i))
)
}

const bigbox = (a) => {

    if(draw == true){
    clear();
    };

    if(a > 100) {
        customSize.value = "";
       return alert("Too HIGH KEEP UNDER 100!")
    };

    boxNum = a * a;
    for (let i = boxNum - 1 ; i >= 0; i--) {
    const box = document.createElement("div");
    box.classList.add("drawbox");
    box.style.height = `${480/a}px`;
    box.style.width = `${480/a}px`;
    box.id = i;
    canv.appendChild(box);
    }
    gridMade();
    draw = true;
}

const clear = () => {
    for (let i = boxNum - 1 ; i >= 0; i--) {
        const box = document.getElementById(`${i}`);
        canv.removeChild(box);
        }
        draw = false;
};


customEnter.addEventListener("click", (e) => {bigbox(customSize.value)});
blackColor.addEventListener("click", (e) => {
    black = true;
    rainbow = false;
})
rainbowColor.addEventListener("click", (e) => {
    rainbow = true;
    black = false;
})
cleartable.addEventListener("click", (e) => {clear()});
threetwo.addEventListener("click", (e) => {bigbox(32)});
stbyst.addEventListener("click", (e) => {bigbox(16)});
