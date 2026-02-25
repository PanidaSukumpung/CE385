# Workshop 7

## 1  User API

1.1 ดึงข้อมูล user ด้วย email (GET)  
``/users/:email``
- รับ email จาก url parameter
- ค้นหาข้อมูลผู้ใช้ด้วย ``findUnique``
- ส่งข้อมูล user กลับไป

1.2 ลบข้อมูลผู้ใช้ด้วย ID (DELETE)  
``/users/:id``
- รับ id จาก URL parameter
- ลบ user ด้วย ``prisma.user.delete``
- ส่งข้อมูล user ที่ถูกลบกลับไป

## 2  Post API

2.1 สร้าง post ใหม่ (POST)  
``/post``
- รับ email จาก url parameter
- ค้นหาข้อมูลผู้ใช้ด้วย ``findUnique``
- ส่งข้อมูล user กลับไป

2.2 ดึงโพสต์ทั้งหมด (GET)  
``/posts``
- ดึงข้อมูลโพสต์ทั้งหมดจาก database ด้วย ``prisma.post.findManu()``

2.3 ดึงโพสต์ตาม ID (GET)  
``/posts:id``
- รับ id จาก URL

2.4 แก้ไขโพสต์ (POST)  
``/posts:id``
- รับ id จาก URL
- รับ title ,content จาก request body
- อัปเดตข้อมูลลง database

2.5 ลบโพสต์ (DELETE)  
``/posts:id``
- รับ id จาก URL
- ใช้ ``prisma.post.delete`` เพื่อลบโพสต์ออกจาก database