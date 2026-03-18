let inputName=document.getElementById("name-input")
let inputUser=document.getElementById("user-input")
let inputPassword=document.getElementById("password-input")
let inputRePassword=document.getElementById("re-password-input")
let buttonSubmit=document.getElementsByTagName("button")[0]
    
buttonSubmit.addEventListener("click",(e)=>{
    e.preventDefault()
    // tên
    let validName=true
    if(inputName.value==""){
        alert("Tên không được trống")
        validName=false
    }
    // tên đăng nhập
    let validUser=true
    if(inputUser.value==""){
        alert("Tên đăng nhập không được trống")
        validUser=false
    }else if(inputUser.value.length<4){
        alert("Tên đăng nhập phải chứa ít nhất 4 ký tự")
        validUser=false
    }
    let validPass=true
    if(inputPassword.value==""){
        alert("Mật khẩu không được trống")
        validPass=false
    }else if(inputPassword.value.length<6){
        alert("Mật khẩu phải chứa ít nhất 6 ký tự")
        validPass=false
    }
    let validRePass=true
    if(inputRePassword.value==""){
        alert("Mật khẩu nhập lại không được trống")
        validRePass=false
    }else if(inputRePassword.value!=inputPassword.value){
        alert("Mật khẩu nhập lại không đúng")
        validRePass=false
    }

    if(validName==true && validUser==true && validPass==true && validRePass==true){
        let obj={
        fullname: inputName.value,
        username: inputUser.value,
        password: inputPassword.value
        }
        localStorage.setItem("users", JSON.stringify(obj))
        inputName.value=""
        inputUser.value=""
        inputPassword.value=""
        inputRePassword.value=""
        alert("Đăng ký thành công!")
    }
})
