const canvas = document.querySelector("#canvas");
canvas.addEventListener('mouseover', function(event){
    let target = event.target;
    if(target.classList.contains('pixel')){
        target.classList.add('colored');
    }
    }
)
drawCanvas(4);
const btn = document.querySelector("#btn");

btn.addEventListener('click', function updateCanvas(){
    canvas.innerHTML = "";
    let canvasSize = document.getElementById('size').value;
    drawCanvas(canvasSize);
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
