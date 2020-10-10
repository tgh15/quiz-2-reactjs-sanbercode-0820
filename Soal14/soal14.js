const volume = (...rest) => {
    if (rest.length === 3) {
        return rest.reduce((previous, current) => {
            return previous * current;
        })
    }
    if (rest.length === 1) {
        return rest * rest * rest
    }
}
var balok = volume(2, 5, 7)
var kubus = volume(3)

console.log(`Volume Balok : ${balok} dan Volume Kubus : ${kubus}`)