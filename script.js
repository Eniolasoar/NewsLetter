let input=document.getElementById("input");
let button=document.getElementById("button");
let errorMessage=document.getElementById("errorMessage");
let responsiveImage1=document.getElementById("responsiveImage");
responsiveImage1.style.width="400px";
input.addEventListener("input",()=>{
    //use the input value instead
    validateEmail(input.value);
    
    
});

function validateEmail(email){
    let emailPattern=/^[^\s@]+@gmail+\.com$/;
    //use a different parameter to prevent clashing
    if(email===""){
        
        button.style.backgroundImage="";
        button.style.backgroundColor="hsl(235, 18%, 26%)";
        errorMessage.textContent="";
        return false;
    }
    if(email.match(emailPattern)){
        button.style.backgroundImage="linear-gradient(270deg,hsl(4, 90%, 80%),hsl(4, 100%, 67%))";
        errorMessage.textContent="";
        button.addEventListener('mouseover',()=>{
            button.style.backgroundImage="linear-gradient(270deg,orange,hsl(4, 100%, 67%))"
        })
        return true;
    }
    else{
        button.style.backgroundImage="";
        button.style.backgroundColor="hsl(235, 18%, 26%)";
        errorMessage.textContent="Please enter a valid email!!";
        errorMessage.style.color="red";
        return false;
    }
}
button.addEventListener("click",()=>{
    if(validateEmail(input.value)){
        window.location.href="success.html";
    };
    

})


