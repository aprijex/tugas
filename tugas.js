function hitungloncatan(tinggi) {
    for (var loncatan = 0; tinggi > 1; loncatan++) {
        console.log(tinggi);
        var tinggibaru = (tinggi * 3) / 4;
        tinggi = tinggibaru;
        console.log(loncatan);
    }
    return loncatan;
}
var hasil = hitungloncatan(10);
console.log("loncatan", hasil);
