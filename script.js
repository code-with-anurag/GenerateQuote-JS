let advice123=document.getElementById('advice123');
let para1=document.getElementById('para1');
let para2=document.getElementById('para2');
let button=document.querySelector('button');

const array=['<i class="dice fa-solid fa-dice-one"></i>',
    '<i class="dice fa-solid fa-dice-two"></i>',
    '<i class="dice fa-solid fa-dice-three"></i>',
    '<i class="dice fa-solid fa-dice-four"></i>',
    '<i class="dice fa-solid fa-dice-five"></i>',
    '<i class="dice fa-solid fa-dice-six"></i>'
]
let myFunction= async(e)=>{

const response= await fetch('http://quotable.io/random');
const data=await response.json();
console.log(data);

para1.innerText=data.content;
para2.innerText="By -"+ data.author;
advice123.innerText="Advice # "+ data._id;

const random=Math.floor(Math.random()*6);
button.innerHTML=array[random];
button.style.backgroundColor='bisque';

button.style.transform='rotate(360deg)';

setTimeout(()=>{
   button.style.transform='rotate(0deg)';
   button.style.transition='all ease-in-out 0.2s'
},100)

}
button.addEventListener('click',myFunction);

myFunction();
