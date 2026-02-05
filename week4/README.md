# work 1
- ฟังก์ชัน operation ใช้สำหรับคำนวณทางคณิตศาสตร์พื้นฐาน โดยรับพารามิเตอร์ type เพื่อกำหนดประเภทการคำนวณ และตัวเลข a, b เพื่อใช้ในการคำนวณ 
`function operation(type ,a ,b)`
- สร้างเงื่อนไข if-else กำหนดการคำนวณ และคืนค่าผลลัพธ์
- ใช้ `module.exports = operation;` เพื่อนำ function ออกไปใช้งานในไฟล์อื่น
### ใน index.js
- import function operation จากไฟล์ work1.js ที่ทำการ export ไว้
- เรียกใช้ operation() และส่งค่า arguments เข้าไป

# work 2
1. fetchDataWithCallback(callback)
    - เป็นฟังก์ชันที่รับ callback เป็นพารามิเตอร์
    - ใช้ setTimeout จำลองการดึงข้อมูลจาก server
    - ส่งข้อมูลกลับผ่าน callback ในรูปแบบ (error, data)
2. เรียกใช้ fetchDataWithCallback
    - ตรวจสอบ error
    - ถ้าไม่เกิด error แสดงผลข้อมูลที่ได้ด้วย console.log
3. fetchDataWithPromise()
    - เป็นฟังก์ชันที่คืนค่าเป็น Promise
    - ใช้ resolve เมื่อดึงข้อมูลสำเร็จ , ใช้ reject เมื่อ error

4. เรียกใช้ fetchDataWithPromise ด้วย .then() เพื่อรับข้อมูลที่สำเร็จ
ใช้ .catch() เพื่อจัดการกรณีเกิด error

# work 3
1. simulateAsyncOperation(timeout)
    - เป็นฟังก์ชันที่คืนค่าเป็น Promise
    - ใช้ setTimeout จำลองการทำงานแบบ async
    - ถ้า timeout >= 1000 จะ resolve พร้อมข้อมูล
    - ถ้าน้อยกว่า 1000 จะ reject พร้อมข้อความ error
2. performAsyncTask(timeout)
    - เป็นฟังก์ชันแบบ async
    - ใช้ await รอผลลัพธ์จาก simulateAsyncOperation
    - ใช้ try...catch เพื่อจัดการกรณีสำเร็จและกรณีเกิด error
3. เรียกใช้ performAsyncTask
    - performAsyncTask(1500) → ทำงานสำเร็จ (Success)
    - performAsyncTask(500) → ทำงานล้มเหลว (Error)

# work 4
- จัดการ Promise หลายตัวพร้อมกัน จากหลาย server
- จำลอง server 3 ตัวที่ใช้ setTimeout และมีทั้งกรณีสำเร็จ (resolve) และล้มเหลว (reject)

### กรณีที่ 1: แสดง server ตัวแรกที่ตอบสนองสำเร็จ
 - ใช้ Promise.any()
 - จะคืนค่า Promise ตัวแรกที่ resolve ได้ ถ้า Promise ตัวไหน reject จะถูกข้ามไป  
 - ถ้าทุก Promise reject จะเข้า .catch()

### กรณีที่ 2: แสดงผลลัพธ์จากทุก server
- ใช้ Promise.allSettled()
- รอให้ ทุก Promise ทำงานเสร็จ
- คืนค่าเป็น array ของ object ที่บอก
    - status (fulfilled / rejected)
    - value หรือ reason