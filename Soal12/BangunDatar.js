class BangunDatar {
    constructor(nama) {
        this._nama = nama
    }

    get nama() {
        return this._nama
    }
    set name(nama) {
        return this._nama = nama
    }

    luas() {
        return ''
    }
    keliling() {
        return ''
    }
}

class Lingkaran extends BangunDatar {
    constructor(nama) {
        super(nama)
        this._phi = 3.14
        this._radius = 0
    }
    get radius() {
        return this._radius
    }
    set radius(radius) {
        return this._radius = radius
    }
    get phi() {
        return this._phi
    }
    set phi(phi) {
        return this_.phi = phi
    }
    luas() {
        return this._phi * this._radius * this._radius
    }
    keliling() {
        return this._phi * (this._radius * 2)
    }
}

class Persegi extends BangunDatar {
    constructor(nama) {
        super(nama)
        this._sisi = 0
    }
    get sisi() {
        return this._sisi
    }
    set sisi(sisi) {
        return this._sisi = sisi
    }
    luas() {
        return this._sisi * this._sisi
    }
    keliling() {
        return this._sisi * 4
    }
}

var lingkaran = new Lingkaran('bulat')
lingkaran.radius = 10
console.log(lingkaran.nama)
console.log(lingkaran.luas())
console.log(lingkaran.keliling())

var persegi = new Persegi('kotak')
persegi.sisi = 7
console.log(persegi.nama)
console.log(persegi.luas())
console.log(persegi.keliling())