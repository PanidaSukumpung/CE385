
const fetchDataWithCallback = (callback) => {
    console.log("start...")
    setTimeout(() => {
        const data = {id : 1 , name: "Jane" , email: "pnida@gmail.com"};
        callback(null , data)
    }, 2000);
}

fetchDataWithCallback((error, data) => {
    if (error) {
        console.log("Error" , error);
    } else {
        console.log("Operation complete, Result: " , data);
    }
})

const fetchDataWithPromise = () => {
    return new Promise((resolve, reject) => {
        console.log("Fetch Data");

        setTimeout(() => {
            const data = {id : 1 , name: "Jane" , email: "panida@gmail.com"};
            const success = true;

            if(success) {
                resolve(data);
            } else {
                reject("Failed to fetch data")
            }
        }, 2000)
    })
}

fetchDataWithPromise()
    .then((data) => {
        console.log("Data fetch success: " , data)
    })
    .catch((error) => {
        console.error("Error")
    })