
let submit = document.getElementById("submit");
let reset = document.getElementById("reset");


submit.onclick = function(){
    const nameUser = document.getElementById("nameUser").value;
    const km = document.getElementById("km").value;
    const age = document.getElementById("age-select").value;
    

    if (nameUser==null || nameUser==="" || km==null || km===""|| age==null || age===""){
        console.log("ciuoto");
        alert("non hai inserito i dati giusti!")
    }


    else{
        document.getElementById("ticket").style.display = "block";
        const tratta = 0.21; //In modo tale che se il costo cambierà sara facile sostituirlo
        let prezzo = km * tratta;
        if (age == "Minorenne"){
            sconto = prezzo/100*20;
            prezzo = prezzo - sconto;
        }
    
        else if (age == "Over-65"){
            sconto = prezzo/100*40;
            prezzo = prezzo - sconto;
        }
    
        else{
    
        }
        
        let numberCarrozza = Math.floor(Math.random() * 10) + 1;
        let codeCp = Math.floor(Math.random() * (99999 - 90000)) + 90000;
        document.getElementById("prezzo").innerText = prezzo + "€";
        document.getElementById("user-name").innerText = nameUser;
        document.getElementById("discount-mode").innerText = age;
        document.getElementById("n-carrozza").innerText = numberCarrozza;
        document.getElementById("n-cp").innerText = codeCp;
    }
}

reset.onclick = function(){
    document.getElementById("ticket").style.display = "none";
}











