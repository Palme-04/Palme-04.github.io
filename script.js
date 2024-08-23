const canvas = document.querySelector("#canvas");
const red = document.querySelector('#red');
const blue = document.querySelector('#blue');
let color = 'yellow';
drawCanvas(4);
const btn = document.querySelector("#btn");

canvas.addEventListener('mouseover', function(event){
    let target = event.target;
    if(target.classList.contains('pixel')){
        target.style.backgroundColor = color;
    }
    }
)

btn.addEventListener('click', function updateCanvas(){
    canvas.innerHTML = "";
    let canvasSize = document.getElementById('size').value;
    drawCanvas(canvasSize);
})

red.addEventListener('click', () =>{
    color = 'red';
})


function drawCanvas(size){
    for (let i = 0; i < size; i++){
        const row = document.createElement('div');
        row.classList.add('row');
        for (let j = 0; j < size; j++){
            const div = document.createElement('div');
            div.classList.add('pixel');
            row.appendChild(div);
        }
        canvas.appendChild(row);
    }
}
