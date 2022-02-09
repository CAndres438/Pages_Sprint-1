let boton= document.getElementById('boton');

let descuento= 0


const back = () => {
    document.location.reload();
  };



const capturarNumeroProceso = () => {
    let cc1 = document.getElementById("cc1").value;
    
    
    let valorCompra= cc1*1850000

    if (valorCompra == 0) {
        descuento=0

        
    }
    if (valorCompra >= 18500000) {
        descuento= 0.10
    }

    if (valorCompra >= 46250000) {
        descuento= 0.30
    }
   
    

    let total= valorCompra - (valorCompra*descuento)
    
    formulario.innerHTML = "";
    formulario.innerHTML = ` <img id="image" src="./Images/daalu.png" width="240" height="200" />

    <label for="Valor de la compra">Valor de la compra: ${"$"+valorCompra}</label>
    <label for="Descuento">Valor de descuento: ${descuento*100+"%"}</label>
    <label for="Dirección">Total: ${"$"+total}</label>`
    boton.innerHTML = `<button onclick="back()" id="btn" >Atrás</button>`;
  };