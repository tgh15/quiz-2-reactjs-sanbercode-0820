let warna = ["biru", "merah", "kuning", "hijua"]

let dataBukuTambahan = {
    penulis: "Jhon Doe",
    tahunTerbit: 2020
}

let buku = {
    nama: 'pemrograman dasar',
    jumalahHalamab: 172,
    warnaSampul: ['hitam']
}

buku.warnaSampul = [...buku.warnaSampul, ...warna]
buku = { ...buku, ...dataBukuTambahan }
console.log(buku)