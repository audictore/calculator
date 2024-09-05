let pantalla_operacion = document.getElementById("pantalla_operacion")
let pantalla_resultado = document.getElementById("pantalla_resultado")
let buttons = document.querySelectorAll(".button")
let operation_records_span = document.getElementById("operation_records_span")
let button_record_delete = document.getElementById("button_record_delete")

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", manejar_click)
}

function manejar_click(evento) {
    let button_clicked = evento.target
    let valor_button = button_clicked.textContent

    if(valor_button == "0" || valor_button == "1" || valor_button == "2" || valor_button == "3" || valor_button == "4" || valor_button == "5" || valor_button == "6" || valor_button == "7" || valor_button == "8" || valor_button == "9") {
        if (pantalla_operacion.textContent == "") {
            pantalla_operacion.textContent = valor_button
        }
        else if (pantalla_operacion.textContent == "0" && valor_button == "0") {
            pantalla_operacion.textContent = pantalla_operacion.textContent
        }
        else {
            pantalla_operacion.textContent += valor_button
        }
    }
    else if (valor_button == ".") {
        let texto_actual = pantalla_operacion.textContent
        let ultimo_caracter = texto_actual[texto_actual.length - 1];

        if (pantalla_operacion.textContent == ""){
            pantalla_operacion.textContent = "0" + valor_button
        }
        else if (ultimo_caracter !== ".") {
            pantalla_operacion.textContent += valor_button
        }
    }
    else if (valor_button == "CE"){
        pantalla_operacion.textContent = ""
        pantalla_resultado.textContent = ""
    }
    else if (valor_button == "←"){
        pantalla_operacion.textContent = pantalla_operacion.textContent.slice(0, -1)
    }
    else if (valor_button == "+" || valor_button == "-" || valor_button == "/" || valor_button == "*"){
        let texto_actual = pantalla_operacion.textContent
        let ultimo_caracter = texto_actual[texto_actual.length - 1]

        if (ultimo_caracter !== "+" && ultimo_caracter !== "-" && ultimo_caracter !== "/" && ultimo_caracter !== "*"){
            pantalla_operacion.textContent += valor_button
        }
        else if (ultimo_caracter == "+" && ultimo_caracter == "-" && ultimo_caracter == "/" && ultimo_caracter == "*"){
            pantalla_operacion.textContent = pantalla_operacion.textContent
        }
        else if (pantalla_operacion.textContent.includes["+"] || pantalla_operacion.textContent.includes["-"] || pantalla_operacion.textContent.includes["/"] || pantalla_operacion.textContent.includes["*"]) {
            pantalla_operacion.textContent = pantalla_operacion.textContent
        }
    }
    else if (valor_button == "=") {
        let operacion_final = pantalla_operacion.textContent
        let resultado_final = eval(operacion_final)

        if(operacion_final == resultado_final){
            pantalla_resultado.textContent = ""
        }
        else{
            pantalla_resultado.textContent = resultado_final
            operation_records(operacion_final, resultado_final)
        }
    
        
        
        
    }

}


function operation_records(operacion_final, resultado_final) {
    let nueva_operacion = document.createElement("span")

    nueva_operacion.innerHTML = operacion_final+ "<br>" +resultado_final+ "<br> <br>";
    operation_records_span.appendChild(nueva_operacion)

}


button_record_delete.addEventListener("click", deleting_record)

function deleting_record(){
    operation_records_span.innerHTML = ""
}