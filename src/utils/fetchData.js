let is_stock = true;

export const fetchData = (timeout, task) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (is_stock) {
                resolve(task)
            } else {
                reject("Error")
            }
        }, timeout);
    })
}
