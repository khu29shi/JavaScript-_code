let promise = new Promise((resolve, reject) => {
    fetch("https://fakestoreapi.com/products/")
        .then(response => {
            if (response.ok) {
                resolve(response.json());
            } else {
                reject("Network response was not ok.");
            }
        })
        .catch(error => {
            reject(error);
        });
});

promise
    .then(data => {
        console.log(data);

    })
    .catch(err => {
        console.error("ERROR:", err);
    });
