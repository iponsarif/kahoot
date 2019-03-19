var name;
name = "blabla";

var angka = 12;

var jumlah = name + angka;
// console.log("hai " + name);
// console.log(jumlah);

if (angka == 10){
    alert("angka" + angka)
} else if (angka > 10){
    // alert(angka);
} else {
    alert(angka);
}

var arr = [347, "test"];

arr.push("hai");
// console.log("isi array",arr);
// console.log(arr);

// arr.pop();
// console.log(arr);


const phi = 3.14;

for(let i = 0; i < arr.length; i++){
    if(i == 1){
        continue;
    }
    console.log(i);
    console.log(arr[i]);
}

let j = 0;
while(true){
    console.log(arr[j]);
    j++;
    if(j == arr.length){
        break;
    }
}

// deklarasi function
// 1
function testFunction(message){
    // console.log(message);
}

// 2
var testFunction2 = function(message){
    // console.log(message);
}

// 3
const testFunction3 = (message) => console.log(message);

testFunction("1. print function");
// testFunction2("2. function 2");
// testFunction3("3. ini adlaah function ke 3 ");

var dict = {
    angka: 2
}

// cara akses dictionary / object
dict.angka;
dict["angka"];

dict.nama = "baru";
dict["kelas"] = "makers";

console.log(dict);

var biodata = {
    kantor: [
        {
            nama: "ipon",
            alamat: "bandung",
            telepon: [123456,98765],
            game: {
                mobile: "PUBG",
                pc: "Dota 2",
                console: ["Winning eleven","crash bandicot"]
            }
        },
        {
            nama: "firman",
            alamat: "gatau"
        }
    ],
    rumah: [
        {
            nama: "ahmad",
            alamat: "bandung",
            telepon: [123456,98765]
        },
        {
            nama: "deri",
            alamat: "gatau"
        }
    ],
    // method yang ada di objek
    mobil: function(tipe){
        console.log("tipe mobile " + tipe)
    }
}

console.log(biodata);
console.log(biodata.kantor[0].game.console[1])

biodata.mobil("Sedan")

// array method
// 1. push -> append(python)
// 2. unshift -> insert depan
// 3. pop -> delete element belakang
// 4. shift -> delete element depan
// 5. join("separator") -> gabung semua element pake separator (ubah array ke string)
// 6. split("separator") -> ubah string ke array

