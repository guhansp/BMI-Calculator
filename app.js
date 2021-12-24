
function Calculate ()
{
    var a = document.getElementById("Age").value
    var b = document.getElementById("Height").value
    var c = document.getElementById("Weight").value

    var bmi = (c/(b*b))*10000
    document.getElementById("cbmi").innerHTML=bmi
    if (bmi<18.5)
    {
        document.getElementById("resultt").innerHTML="Underweight"
    }
    else if (bmi>18.5 && bmi<25)
    {
        document.getElementById("resultt").innerHTML="Normal Weight"


    }
    else if(bmi>26 && bmi < 30)
    {
        document.getElementById("resultt").innerHTML="Overweight"

    }
    else if(bmi>31 && bmi<35)
    {
        document.getElementById("resultt").innerHTML="Obesity class 1"

    }
    else if(bmi>32 && bmi<40)
    {
        document.getElementById("resultt").innerHTML="Obesity Class 2"

    }
    else
    {
        document.getElementById("resultt").innerHTML="Obesity Class 3"

    }

    
    
}

function Resetb()
{
    document.getElementById('Age').value='';
    document.getElementById('Height').value='';
    document.getElementById('Weight').value='';
}


