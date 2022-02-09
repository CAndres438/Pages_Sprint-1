let surveyForm = document.getElementById('survey-form')
let btnGuardar = document.getElementById('submit')
let Reload= document.getElementById('Reload')



const back = () => {
    document.location.reload();}

surveyForm.addEventListener('submit', (e)=> {
    e.preventDefault()

    const name = document.getElementById('name').value

    surveyForm.innerHTML="";

    surveyForm.innerHTML=`<h1>Aquí se hizo algo</h1>`
    Reload.innerHTML=`<button onclick="back()" id="btn" >Atrás</button>`;

    
     console.log(name);})