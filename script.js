const follower=document.getElementsByClassName("followers")[0];
console.log(follower);

//! Event Listner
window.addEventListener("mousemove",(e)=>{
   console.log(e.clientX,e.clientY);
   follower.style.left=e.clientX-10+"px";
   follower.style.top=e.clientY-20+"px";
   follower.style.backgroundColor=`rgb(${e.clientX},${e.clientY},100)`;

   if(e.clientX>350){
        
   }
});