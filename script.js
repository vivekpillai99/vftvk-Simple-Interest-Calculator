function compute(){
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear+parseInt(years);
    document.getElementById("result").innerText="If you deposit "+principal+",\<br\> at at interest rate of"+
    interest+"%.\<br\> You will receive an amount of "+interest+",\<br\> in the year "+ year + "\<br\>" 
}

function updateRate(){
    var rateval = document.getElementById("rate").value;
    document.getElementById("r4ate_val").innerText=rateval;
}