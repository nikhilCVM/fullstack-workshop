const inc = document.getElementById('increment');
const dec = document.getElementById('decrement');
const countContent = document.getElementById('count');
const one = document.getElementById('step1');
const five = document.getElementById('step5');
const ten = document.getElementById('step10');
// inc.addEventListener('click', ()=>{
//     console.log('button clicked');
// })

let count = 0;

let value=1;
// countContent.textContent = "rev";
inc.addEventListener('click', handleinc);
function handleinc(){
    count=count + value;
    countContent.textContent = count;
    // console.log("increment ")
    countContent.style.color = "green";
}
dec.addEventListener('click', handleDec);
function handleDec(){
    if(count>0){

         countContent.style.color = "red";
        count=count-value;
        
        countContent.textContent = count;
    }
    // console.log("decrement ");
}
reset.addEventListener('click', handleres);

function handleres(){
    count=0;
    countContent.textContent= count;
    // console.log("reset ")
}

one.addEventListener('click', handleone);
function handleone(){
    value = 1;
    // console.log(value);

    
}
five.addEventListener('click', handlefive);
function handlefive(){
    value = 5;
    // console.log(value);

    
}
ten.addEventListener('click', handleten);
function handleten(){
    value = 10;
    // console.log(value);

    
}


