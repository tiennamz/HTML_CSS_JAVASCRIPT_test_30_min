let inputElement=document.getElementsByTagName("input")
let emailValue=document.getElementById("email")
let passWordValue=document.getElementById("password")
let passWordAgainValue=document.getElementById("again-password")


let button=document.getElementById("submit")




button.addEventListener("click",(e)=>{

    e.preventDefault()
    if(passWordValue.value!==passWordAgainValue.value){
        alert("Mật khẩu nhập lại không đúng")
        
    }else{
        let obj={
        email: emailValue.value,
        password: passWordValue.value,
        passwordAgain: passWordAgainValue.value
    }
    console.log(obj);
    emailValue.value=""
    passWordValue.value=""
    passWordAgainValue.value=""
    }
    
    
})