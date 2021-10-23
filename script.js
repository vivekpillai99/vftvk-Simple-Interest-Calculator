//Vivek Pillai, IBM Course, Simple Interest Calculator
//Function that finds the amount earned from interest based on user input
function compute(){
    //Getting all the elements from the HTML code.
    var principal = document.getElementById("principal");
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal.value * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    //Validating that the input values are the correct type
    if (principal.value > 0 && (year >= 2022)){
        document.getElementById("result").innerHTML="If you deposit <span class='highlight'>"+principal.value+"</span>,<br> at at interest rate of <span class='highlight'>"+
        rate+"%</span>.<br> You will receive an amount of <span class='highlight'>"+interest+"</span>,<br> in the year <span class='highlight'>"+ year + "</span><br>"
    }
    else{
        //If they aren't correct, prompt user which one needs to be fixed and resets the results/output.
        if (principal.value <= 0){
            alert("Enter a positive number for the amount value");
            principal.focus();
            document.getElementById('result').innerHTML="";
        }
        if (year < 2021){
            alert("Input year is invalid, less than 2021.");
            document.getElementById('result').innerHTML="";
        }
    } 
}

//Function that displays the interest rate based on the slider
function updateRate(){
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText= " "+rateval+"%";
}