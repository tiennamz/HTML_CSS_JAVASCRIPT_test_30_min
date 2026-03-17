let arrayStudent=[
    {id:1, name: "Nguyễn Văn An",phone: "0901234567", email: "nguyenvanan@email.com"},
    {id:2, name: "Trần Thị Bình",phone: "0912345678", email: "tranthibinh@email.com"},
    {id:3, name: "Lê Văn Cường",phone: "0923456789", email: "levancuong@email.com"},
    {id:4, name: "Phạm Thị Dung",phone: "0934567890", email: "phamthidung@email.com"},
    {id:5, name: "Hoàng Văn Em",phone: "0945678901", email: "hoangvanem@email.com"},
]

// khai báo 
let tbodyElement= document.getElementById("contact-tbody")
let inputName=document.getElementById("contact-name")
let inputPhone=document.getElementById("contact-phone")
let inputEmail=document.getElementById("contact-email")
let buttonAdd=document.getElementsByClassName("btn-add")[0]


// Hiển thị danh sách liên hệ
// Hiển thị tất cả liên hệ trong bảng với đầy đủ thông tin:
// STT: Số thứ tự tự động (1, 2, 3, ...)
// Họ tên: Tên đầy đủ của liên hệ
// Số điện thoại: Số điện thoại (format: 0901234567)
// Email: Địa chỉ email
// Hành động: 2 nút Sửa và Xóa
    const render=()=>{
        tbodyElement.innerHTML=""
        arrayStudent.forEach((stu)=>{
            let trElement=document.createElement("tr")
            trElement.innerHTML=`
                <td>${stu.id}</td>
                <td>${stu.name}</td>
                <td>${stu.phone}</td>
                <td>${stu.email}</td>
                <td>
                  <div class="action-buttons">
                    <button class="btn-edit">Sửa</button>
                    <button class="btn-delete">Xóa</button>
                  </div>
                </td>
            `
            tbodyElement.appendChild(trElement)
        })
    }


// Thêm liên hệ mới
// Khi người dùng nhấn nút "Thêm" hoặc nhấn phím Enter trong form:
// Lấy giá trị từ 3 input: Họ tên, Số điện thoại, Email
// Validate dữ liệu trước khi thêm (xem phần Validation)
// Thêm liên hệ mới vào bảng danh sách
// Reset form sau khi thêm thành công
// Hiển thị alert thông báo "Thêm liên hệ thành công!"
// Cập nhật lại danh sách để xem dữ liệu mới nhất

    let idOrigin=5
    const  hasSpecialChar=(str)=> {
    // Regex: tìm ký tự không nằm trong khoảng a-z, A-Z, 0-9
    const regex = /[^a-zA-Z0-9]/;
    return regex.test(str);
    }
    const  hasPhone=(str)=> {
    // Regex: tìm ký tự không nằm trong khoảng a-z, A-Z, 0-9
    const regex = /^(0|\+84)[0-9]{9,10}$/;
    return regex.test(str);
    }
    const  hasEmail=(str)=> {
    // Regex: tìm ký tự không nằm trong khoảng a-z, A-Z, 0-9
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(str);
    }

    const addStudent=()=>{
        idOrigin++
        // Validation cho Họ tên
        // Không được để trống
        // Độ dài tối thiểu: 2 ký tự
        // Chỉ chứa chữ cái, khoảng trắng và dấu tiếng Việt (không chứa số hoặc ký tự đặc biệt)
        // Hiển thị alert lỗi: "Họ tên không được để trống!" hoặc "Họ tên phải có ít nhất 2 ký tự!" hoặc "Họ tên không được chứa số hoặc ký tự đặc biệt!"
           let validName=true
            if(!inputName.value){
                alert("Họ tên không được để trống!")
                validName=false
            }else if(inputName.value.trim().includes(" ")==false){
                alert("Họ tên phải có ít nhất 2 ký tự!")
                validName=false
            }

        // Validation cho Số điện thoại
        // Không được để trống
        // Định dạng: Phải là số điện thoại Việt Nam hợp lệ
        // Bắt đầu bằng 0
        // Có 10 chữ số (ví dụ: 0901234567, 0912345678)
        // Hoặc bắt đầu bằng +84 và có 9 chữ số sau (ví dụ: +84901234567)
        // Hiển thị alert lỗi: "Số điện thoại không được để trống!" hoặc "Số điện thoại không hợp lệ! Vui lòng nhập số điện thoại 10 chữ số (bắt đầu bằng 0) hoặc định dạng quốc tế (+84...)"
        // Chuỗi regex kiểm tra định dạng Số điện thoại: /^(0|\+84)[0-9]{9,10}$/
            let validPhone=true
            if(!inputPhone.value){
                alert("Số điện thoại không được để trống!")
                validPhone=false
            }else if(hasPhone(inputPhone.value)==false){
                alert("Số điện thoại không hợp lệ! Vui lòng nhập số điện thoại 10 chữ số (bắt đầu bằng 0) hoặc định dạng quốc tế (+84...)")
                validPhone=false
            }
        // Validation cho Email
        // Không được để trống
        // Định dạng: Phải là email hợp lệ
        // Có ký tự @
        // Có phần trước @ (local part)
        // Có phần sau @ (domain) với ít nhất một dấu chấm
        // Ví dụ hợp lệ: user@example.com, test.email@domain.co.uk
        // Không được trùng với email đã tồn tại (khi thêm mới)
        // Hiển thị alert lỗi: "Email không được để trống!" hoặc "Email không hợp lệ!" hoặc "Email đã tồn tại trong danh bạ!"
        // Chuỗi regex kiểm tra định dạng email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            let validEmail=true
            if(!inputEmail.value){
                alert("Email không được để trống!")
                validEmail=false
            }else if(!hasEmail(inputEmail.value)){
                validEmail=false
                alert("Email không hợp lệ!")
            }

            if(validPhone==true && validName==true && validEmail==true){
                let obj={
                    id: idOrigin,
                    name: inputName.value,
                    email: inputEmail.value,
                    phone: inputPhone.value
                }
                arrayStudent.push(obj)
                alert("Thêm liên hệ thành công!")
                inputEmail.value=""
                inputName.value=""
                inputPhone.value=""
                render()
            }
    }

buttonAdd.addEventListener("click",(e)=>{
    e.preventDefault()
    addStudent()
})
