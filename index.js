const display = document.getElementById("display");
let Val = "";
let switchBrac = false;
let index=-1;

function percentageNumber(){
    if(index < Val.lastIndexOf("+")){
        index=Val.lastIndexOf("+");
    }
    if(index < Val.lastIndexOf("-")){
        index=Val.lastIndexOf("-");
    }
    if(index < Val.lastIndexOf("*")){
        index=Val.lastIndexOf("*");
    }
    if(index < Val.lastIndexOf("/")){
        index=Val.lastIndexOf("/");
    }

    index+=1;
}

function brac(){
    if (!switchBrac){
        display.value += "(";
        Val += "(";
    }
    else{
        Val += ")"
        display.value += ")";
    }
    switchBrac=!switchBrac;
}

function addtodisplay(input){
    if (input == "*"){
        Val += "*";
        display.value += "×";
    }
    else if(input == "/"){
        Val += "/";
        display.value += "÷";
    }
    else if(input=="%"){
        percentageNumber();
        display.value += input;
        Val= Val.slice(0,index)+(Val.slice(index)/100);
    }
    else if (input == "B"){
        brac();
    }
    else{
        display.value += input;
        Val+=input;
    }
}

function backspace(){
    let tempVal = display.value;
    display.value = tempVal.slice(0,-1);
    Val=Val.slice(0,-1);
}

function clearDisplay(){
    display.value = "";
    Val = "";
    index=-1;
}

function calculate(){
    try{
        display.value = eval(Val);
    }
    catch(error){
        console.log(Val);
        display.value = "ERROR"
    }
}