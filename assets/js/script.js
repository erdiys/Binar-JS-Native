// Variable
// 1. var = Old School
var x = 0;
x = 15;
// console.log(x);

// Variable Modern
// 1. let
let z = 10;
z = 5;
// console.log(z);

// 2. const
const y = 5;
// y = 7;
// console.log(y);


// Tipe Data
// primitif
let text = "lorem ipsum"; // string
let number = 0;           // number
let kosong = null;
let undef;                // undefined
let undef2 = undefined;
let isMorning = true;     // boolean
let isEvening = false;

// non primitif
// 1. object
const zenix = {
    brand: 'Toyota',
    mesin: 'Hybrid',
    warna: 'Black',
    specs: {
        mesin: '2.0l',
        rangka: 'TNGA'
    }
}
// console.log(zenix);
// console.log(zenix.specs.mesin);

zenix.specs.mesin = '2.5l';
// console.log(zenix.specs.mesin);

// 2. array
const mobilToyota = ['GR Yaris', 'Reborn', 'Supra']
// console.log(mobilToyota[1]);
mobilToyota[1] = "Innova Reborn";
// console.log(mobilToyota[1]);

const mobil = [
    {
        nama: 'GR Yaris Cross',
        mesin: 'Hybrid',
        warna: 'Black',
        specs: {
            mesin: '1.5l',
            rangka: 'TNGA'
        }
    },
    {
        nama: 'Innova Reborn',
        mesin: 'Diesel',
        warna: 'Black',
        specs: {
            mesin: '2.5l',
            rangka: 'TNGA'
        }
    },
    {
        nama: 'Supra',
        mesin: 'Bensin',
        warna: 'Red',
        specs: {
            mesin: '3.5l',
            rangka: 'TNGA'
        }
    }
]
// console.log(mobil[2].specs);


// Operator
// 1. Aritmatika
const tambah = 1 + 1;
const kali = 2 * 2;
const hasilBagi = 2 % 2;
const pangkat = 2 ** 2;

// 2. Concatenation // menggabungkan 2 string
const a = 'a';
const b = 'b';
const newText = a + b;
// console.log(newText);
// console.log('10' + mobilToyota);

// 3. Assignment
let seribu = 1000;
seribu = seribu + 500;
seribu += 500;
// console.log(seribu);

// 4. Logical <,>,<=,>=,=,==,===,!=,!==,
const x1 = 1;
const x2 = 2;
const result = x2 > x1;
// console.log(result);

// sama dengan / equality
console.log(1 === 1);   // true
console.log('1' == 1);  // true
console.log('1' === 1); // false

// tidak sama dengan / not equal
console.log(2 !== 2);
console.log(2 != 2);


