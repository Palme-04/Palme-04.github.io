const canvas = document.querySelector("#canvas");
const red = document.querySelector('#red');
const blue = document.querySelector('#blue');
const left = document.querySelector("#left_flex_container")
let color = 'black';
let alert = false;
drawCanvas(16);
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

black.addEventListener('click', () =>{
    color = 'black';
})

red.addEventListener('click', () =>{
    color = 'red';
})

blue.addEventListener('click', () =>{
    color = 'blue';
})

eraser.addEventListener('click', () =>{
    color = 'white';
})

function drawCanvas(size){
    if(size < 0 || size > 100){
        if(!alert){
            const div = document.createElement('div');
            div.classList.add("alert");
            div.textContent = "Only numbers between 0 and 100!"
            left.appendChild(div);
            alert = true;
        }
       
    }else{
        if (alert){
            document.querySelector(".alert").remove();
        }
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
    
}
