

string_text = 'One fateful evening, while working at Intergalactic Research Institute, Sarah stumbled upon a strange tranmission. The message was: "RS REWKX". The key is the lowest positive two digit number. Enter the key below to decode the message.';
letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
table_data = document.querySelectorAll('td')
var my_array = string_text.split("");
var loopTimer;
function typedtext(){
    if (my_array.length>0){
        document.getElementById('text').innerHTML += my_array.shift();
    }
    else{
        document.querySelector('.wheel').style.display = "flex";
        document.getElementById('key').style.display ="inline";
        document.getElementById('alien').style.display = "inline";
        clearTimeout(loopTimer);
        return false;
        
    }
    loopTimer = setTimeout('typedtext()',35);
}

typedtext()

document.getElementById('sub10').addEventListener("click",function(event){
    
        var key = parseInt(document.getElementById('key1').value);
        for (let i=0;i<=26;i++){
            table_data[i].innerHTML = letters[i+key]
            if (i+key>25){
                table_data[i].innerHTML = letters[i+key-26]
            }
        }
        }
    
)

document.getElementById('submit').addEventListener('click',()=>{
    answer1 = document.getElementById('answer1').value;
    console.log(answer1)
    if(answer1.toLowerCase()==='hi human'){
        window.location.href= "1000.html";
    }

    else{
        alert('Try again! Not the right answer')
    }
})
