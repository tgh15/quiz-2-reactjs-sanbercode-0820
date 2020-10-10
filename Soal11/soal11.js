function filterBooksPromise(colorful, amountOfPage) {
    return new Promise(function (resolve, reject) {
        var books = [
            { name: 'sinchan', totalPage: 50, isColorful: true },
            { name: 'Kalkulus', totalPage: 250, isColorful: false },
            { name: 'doraemon', totalPage: 40, isColorful: true },
            { name: 'algoritma', totalPage: 300, isColorful: true },
        ]
        if (amountOfPage > 0) {
            resolve(books.filter(x => x.totalPage >= amountOfPage && x.isColorful == colorful))
        } else {
            var reason = new Error("maaf parameter salah")
            reject(reason)
        }
    })
}

filterBooksPromise(true, 40)
    .then((x) => {
        console.log(x)
    })
    .catch(err => {
        console.log(err)
    })

filterBooksPromise(false, 0)
    .then((x) => {
        console.log(x)
    })
    .catch(err => {
        console.log(err)
    })