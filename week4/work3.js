const simulateAsyncOperation = (timeout)=> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = {id : 1 , name: "Jane" , email: "panida@gmail.com"};
            if (timeout >= 1000) {     
                resolve(data)
            } else {
                reject("Failed ")
            }
        })
    } , timeout)
}

const performAsyncTask = async (timeout) => {
    try {
        const result = await simulateAsyncOperation(timeout);
        console.log('Success: ',result)
    } catch (error) {
        console.log('Error: ' , error)
    }
}

performAsyncTask(1500);
performAsyncTask(500);