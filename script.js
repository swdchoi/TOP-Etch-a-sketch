const canv = document.querySelector("#canv");
const stbyst = document.querySelector("#start");
const threetwo = document.querySelector("#threetwo");
const cleartable = document.querySelector("#clear");

let boxNum = 0;


const colorChange = (a) => {
    a.style.backgroundColor = "red";
    console.log("hi");
}

const gridMade = () => {
const boxesId = document.querySelectorAll(".drawbox");

boxesId.forEach((i) =>
i.addEventListener("mouseover", e => colorChange(i))
)
}

const bigbox = (a) => {

    boxNum = a * a;
    for (let i = boxNum - 1 ; i >= 0; i--) {
    const box = document.createElement("div");
    box.classList.add("drawbox");
    box.style.height = `${480/a}px`
    box.style.width = `${480/a}px`;
    box.id = i;
    canv.appendChild(box);

    gridMade();
}
}

const clear = () => {
    for (let i = boxNum - 1 ; i >= 0; i--) {
        const box = document.getElementById(`${i}`);
        canv.removeChild(box);
        }

};

cleartable.addEventListener("click", (e) => {clear()});
threetwo.addEventListener("click", (e) => {bigbox(32)});
stbyst.addEventListener("click", (e) => {bigbox(16)});
