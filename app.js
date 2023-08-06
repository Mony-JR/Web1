const arr=[

{name:"Mony JK",p:"I'm Website developer"},
{name:"Mony J",p:"I'm Youtuber"},
{name:"Mony JM",p:"I'm hacker"}

];
console.log(arr);
const namejs=document.querySelector("#name");
const next=document.querySelector(".next");
const pos=document.querySelector("#position-id");
let run=0;
next.addEventListener("click",()=>{
    if(run==2){
        run=0;
    }
    else
    run++;
    namejs.innerHTML=arr[run].name;
    pos.innerHTML=arr[run].p;
})