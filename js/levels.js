
let flag=localStorage.getItem("flagTimes");
if(flag==="true"){
    document.getElementById("instructions").style.display="block";
     document.getElementById("body").style.opacity="0.2";
}
let x=document.getElementById("x");
x.addEventListener("click",()=>{
    document.getElementById("instructions").style.display="none";  
    document.getElementById("body").style.opacity="1";
})
