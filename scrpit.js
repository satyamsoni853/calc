let inputbox = document.getElementById('inputbox');
let buttons =document.querySelectorAll('button');

let string ='';

let arr =Array.from(buttons);
 arr.forEach(button =>{
    button.addEventListener('click',(e)=>{
        if (e.target.innerHTML == '=') {
            string =eval(string);
            inputbox.value =string;
            
        }
        else if(e.target.innerHTML =='AC'){
            string=''
            inputbox.value=string;
        }
        else if (e.target.innerHTML=='DEL'){
            string =string.substring(0,string.lenght-1);
            inputbox.value =string;

        }
        else if(e.target.innerHTML=='squ'){
            string= string*string;
            inputbox.value =string;
        }
        else{
        string += e.target.innerHTML;
        inputbox.value =string;
        }
    })
 })

