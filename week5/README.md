# Work 1
1. กำหนดข้อมูลนักศึกษาเริ่มต้นในตัวแปร students
- เก็บข้อมูลเป็น array ของ object
- แต่ละ object มี id, name, age, major
2. ใช้ express.json()เพื่อรองรับการรับส่งข้อมูลแบบ JSON
3. สร้าง API endpoints สำหรับจัดการข้อมูลนักศึกษา

# Work 2
1. สร้าง middleware validateStudent(req, res, next)
- ตรวจสอบว่ามี name และ age อยู่ใน req.body
- ถ้าข้อมูลไม่ครบ:
    - ส่ง status 400 และส่งข้อความ "Invalid data"
- ถ้าข้อมูลครบ:
    - เรียก next() เพื่อไปทำงานต่อ
2. นำ middleware ไปใช้กับ API: `` POST /students ``