function obtenernumeros(){
    let a = parseFloat(document.getElementById("num1").value);
    let b = parseFloat(document.getElementById("num2").value);
    return{a, b};
}
function sumar(){
    let {a, b} = obtenernumeros();
    document.getElementById("resultado").innerText = a + b;
}
function restar(){
    let {a, b} = obtenernumeros();
    document.getElementById("resultado").innerText = a - b;
}
function multiplicar(){
    let {a, b} = obtenernumeros();
    document.getElementById("resultado").innerText = a * b;
}
function dividir(){
    let {a, b} = obtenernumeros();
    if (b===0){
        document.getElementById("resultado").innerText = "no se puede dividir por 0";
    } else{

    document.getElementById("resultado").innerHTML = a / b;}
}