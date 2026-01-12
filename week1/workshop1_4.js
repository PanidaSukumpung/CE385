const username = "admin"
const password = "1234"
const age = 18

if (username === "admin" && password === "1234" && age >= 18) {
    console.log("success")
} else if (username != "admin" || password != "1234") {
    console.log("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง")
} else if (age < 18) {
    console.log("อายุไม่ถึงเกณฑ์")
}