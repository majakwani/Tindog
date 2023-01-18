import dogsData from "./data.js";

const dogsObj = [...dogsData]

function getDogsHtml(data) {
    dogsObj.shift()
  return `<div id="dog-data">
    <div id="image">
        <img src = ${data.imgPath} class="dog-image">
    </div>
    <div id="name-age">${data.name}, ${data.age}</div>
    <div id = "description">${data.bio}</div>
    <div id = "decision"></div>
</div>
<div id="buttons">
<button id="accepted" type="button" data-name="${data.name}"></button>
<button id="rejected" type="button" data-name="${data.name}"></button>
</div>
`;
}

function render(){
    if(dogsObj.length >= 1){
        document.querySelector('main').innerHTML = getDogsHtml(dogsObj[0])
    }
}

function renderDecision(id){
    console.log(id)
    document.getElementById('decision').innerHTML = `<img src = "./images/${id}.png" class = "decision-image">`
}

document.addEventListener('click', (e) =>{
    if(e.target.dataset.name){
        renderDecision(e.target.id)
        setTimeout(render, 2500)
    }
})

render()