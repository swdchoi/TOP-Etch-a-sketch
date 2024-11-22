const canv = document.querySelector("#canv");
const start = document.querySelector("#start");
let boxNum16by16 = 256;
let stbyst = false;

const bigbox16by16 = () => {
if(stbyst == true){
alert("already at 16 x 16!")
} else if (stbyst == false){
    for (let i = boxNum16by16 - 1 ; i >= 0; i--) {
    const box = document.createElement("div");
    box.classList.add("drawbox");
    canv.appendChild(box);
    }

    stbyst = true;
}
}

start.addEventListener("click", (e) => {bigbox16by16()});

