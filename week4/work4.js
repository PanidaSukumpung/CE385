
const fetchDataFormServer1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Server1");
        }, 2000)
    })
}
const fetchDataFormServer2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Server2 error");
        }, 1000)
    })
}
const fetchDataFormServer3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Server3");
        }, 3000)
    })
}

// แสดงข้อมูล server ตัวแรกที่ตอบสนองสำเร็จ โดยไม่สนใจตัวอื่น
Promise.any([fetchDataFormServer1(),fetchDataFormServer2(),fetchDataFormServer3()])
    .then((result) => {
        console.log("กรณีที่ 1:");
        console.log(`Server ตัวแรกที่ตอบสนองสำเร็จ` , result);
    })
    .catch((error) => {
        console.log(`Error` , error);
    })

// แสดงผลลัพทธ์ทั้งหมดจากทุก server
Promise.allSettled([fetchDataFormServer1(),fetchDataFormServer2(),fetchDataFormServer3()])
    .then((result) => {
        console.log("กรณีที่ 2:");
        console.log(`ผลลัพธ์จากทุก server` , result);
    })
  