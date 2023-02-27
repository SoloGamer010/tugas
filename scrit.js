let nilai = promt("Masukan nilai : ", 0);
let hasil = "";

switch(true){
    case nilai >= 91 && nilai <= 100:
        hasil = "A";
        break;
    case nilai >= 81 && nilai <= 90:
        hasil = "B";
        break;
    case nilai >= 71 && nilai <= 80:
        hasil = "C";
        break;
    case nilai >= 61 && nilai <= 70: 
        nilai = "D";
        break;
    case nilai >= 0 && nilai <= 60:
        nilai = "F";
        break;
    default:
    document.write("Input invalid");

}

document.write(hasil)