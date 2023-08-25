class kendaraan {
    constructor(merk, tahunproduksi) {
        this.merk = merk; 
        this.tahunproduksi = tahunproduksi
    }
}

class mobil extends kendaraan {
    constructor (merk, tahunproduksi) {
        super (merk, tahunproduksi);
        this.merk = merk;
        this.tahunproduksi = tahunproduksi;
    }

    hitungusia (){
        const usia = this.usiakendaraan();
        console.log('Mobil ${this.merk} berusia ${this.hitungusia()}');
    }
}

class motor extends kendaraan {
    constructor (merk, tahunproduksi) {
        super (merk, tahunproduksi);

    }
    hitungusia () {
        const usia = this.usiakendaraan();
        console.log('mobile ${this.merk} berusia ${usia()}');

    }
}

const avanza = new mobil("avanza", 2014);

