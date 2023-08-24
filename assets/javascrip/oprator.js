// unary Oprator
const fullname = "ibra najwan";

console.log(typeof fullname);
if (typeof fullname == "string") {
    console.log("Ya ini string dengan value : " + fullname)
} else {
    console.log("Maaf variable tidak bertipe string!")
}

// Boolean Values
let student = {
    fullname: "ibra",
    age: 18,
    isActive: false
}

if (student.isActive) {
    console.log(`Hello ${student.fullname}, umur anda ${student.age} Tahun.`);
} else {
    console.log("Maaf student tidak aktif!");
}

// comparison
const hargaBarang = 50000;
const minimalHargaBarang = 12000;
const diskon = 10 / 100;

if (hargaBarang < minimalHargaBarang) {
    console.log("Harga yang harus dibayar = " + (hargaBarang - (hargaBarang * diskon)));
} else {
    console.log("Harga yang harus dibayar = " + hargaBarang);
}

// != 

if (student.age !== 10) {
    console.log(`Student Sudah Dewasa`);
} else {
    console.log("Student Cukup Muda");
}

// Logical Operator
student.grade = 80;

if (student.grade >= 80 || student.grade <= 90 || student.grade == 70) {
    console.log("Anda Cukup pandai!");
}

if (student.grade >= 80 && student.grade <= 90) {

} else if (student.grade == 70 && student.grade < 80) {

}

// 
const data = {
    email: "admin@mail.com",
    password: "admin123"
}

const email = "hendar";
const password = "hendar123";
if (email == data.email && password == data.password) {
    console.log("Login berhasil");
} else {
    console.log("email dan password tidak sesuai!");
}

console.log(8 * null);
console.log("ibra" * 2);
console.log("5" - 1);
console.log("5" + 1);

const namaLengkap = "ibra";

(namaLengkap === "ibra") ? console.log(namaLengkap) : console.log("Nama Anada Bukan ibra");

console.log("ibra" || null);
console.log(null || "ibra");
console.log("ibra" || "Agus");

let result = 1; let counter = 0; 
while (counter < 10) { 
    result = result * 2; 
    counter = counter + 1;

    console.log(counter);
    console.log(result);
}

for (let index = 0; index < array.length; index++) {
    const element = array[index];
}

for (const arrayObject of object) {
}
