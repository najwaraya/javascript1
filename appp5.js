// ARRAY
// const nama = ["Devyn Ramirez",
//   "Harmony Duncan",
//   "Clarissa Burgess",
//   "Reilly Blanchard",
//   "Zion Brooks",
//   "Jovanny Mays",
//   "Cindy Chase",
//   "Kristin Mcdaniel",
//   "Macey Sanford",
//   "Alfredo Faulkner",]
// const masaKerja= [10,
//     5,
//     8,
//     7,
//     4,
//     10,
//     9,
//     8,
//     7,
//     10]
// const nomerInduk =["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
// const gaji=["7.000.000", "4.000.000", "7.000.00", "7.000.000", "4.000.000", "7.000.000", "7.000.000", "7.000.000", "7.000.000", "7.000.000"]

//     const karyawanJunior = []
//   const karyawanSenior = []
  
//   for (let i = 0; i < nama.length; i++) {
//     // cek masa kerja
//     if (masaKerja[i] < 6) {
//       // jika ketemu
//       karyawanJunior.push(nama[i])
//     } else {
//       karyawanSenior.push(nama[i])  
//     }
//   }

// //
// for (let i = 0; i < nama.length; i++) {
//     // cek masa kerja
//     if (masaKerja[i] < 6) {
//       // jika ketemu
//       console.log(`karyawan ${nama[i]} mendapat gaji Rp 4.000.000`)
//     } else {
//       console.log(`karyawan ${nama[i]} mendapat gaji Rp 7.000.000`)
//     }
//   }  
  
  //
  // for (karyawan of karyawanJunior) {
    // console.log(`karyawan ${karyawan} mendapat gaji Rp 4.000.000`)
  // }
  
  // for (karyawan of karyawanSenior) {
   // console.log(`karyawan ${karyawan} mendapat gaji Rp 7.000.000`)
 // }

//OBJECT

daftarKaryawan =[
    
      { nama: "Devy Ramirez", 
        masaKerja:"10",
        nomerInduk: "1",
        gaji: "7.000.000",
       
      },

      { nama: "Harmony Ramirez", 
        masaKerja:"5",
        nomerInduk: "2",
        gaji: "4.000.000",
      },

      { nama: "Clarissa Burgess", 
        masaKerja:"8",
        nomerInduk: "3",
        gaji: "7.000.000",
      },

      { nama: "Reilly Blancgar7", 
        masaKerja:"7",
        nomerInduk: "4",
        gaji: "7.000.000",
      },

      { nama: "Zion Brooks", 
        masaKerja:"4",
        nomerInduk: "5",
        gaji: "4.000.000",
      },

      { nama: "Jovanny Mays", 
        masaKerja:"10",
        nomerInduk: "6",
        gaji: "7.000.000",
      },

      { nama: "Cindy Chase", 
        masaKerja:"9",
        nomerInduk: "7",
        gaji: "7.000.000",
      },

      { nama: "Kristin Mcdaniel", 
        masaKerja:"8",
        nomerInduk: "8",
        gaji: "7.000.000",
      },

      { nama: "Macey Sanford", 
        masaKerja:"7",
        nomerInduk: "9",
        gaji: "7.000.000",
      },

      { nama: "Alfredon Faulkner", 
        masaKerja:"10",
        nomerInduk: "10",
        gaji: "7.000.000",
      },
// 

]
let mode= 'tambah'

const tampilkanKaryawan = () => {

     const tblKaryawan = document.getElementById('tblKaryawan')
     tblKaryawan.innerHTML ='<tr><th>no</th><th>nama</th><th>masakerja</th><th>nomerInduk</th><th>gaji</th><th>Edit</th><th>hapus</th></tr>'
    //menambah isi
     for (let idx in  daftarKaryawan) {
      console.log(`${parseInt(idx) + 1}. ${daftarKaryawan[idx].nama} nomer Induk ${daftarKaryawan[idx].nomerInduk} masa kerja ${daftarKaryawan[idx].masaKerja} gaji karyawan ${daftarKaryawan[idx].gaji}`)
       tblKaryawan.innerHTML += `<tr><td>${parseInt(idx) + 1}</td><td>${daftarKaryawan[idx].nama}</td><td>${daftarKaryawan[idx].masaKerja}</td><td>${daftarKaryawan[idx].nomerInduk}</td><td>${daftarKaryawan[idx].gaji}<td><button class="btn btn-warning" onclick="editKaryawan('${daftarKaryawan[idx].nama}')">Edit</button></td></td><td><button class= "btn btn-danger" onclick="hapusKaryawan('${daftarKaryawan[idx].nama}')">Delete</button></td></tr>`
    }
}

// 
const tambahKaryawan=() =>{

    const nama = document.getElementById('textNama').value;
    const masaKerja = document.getElementById('textmasaKerja').value;
    const nomerInduk = document.getElementById('textnomerInduk').value;
    const gaji = document.getElementById('textGaji').value;

    const Karyawanbaru ={
        nama: nama,
        masaKerja: masaKerja,
        nomerInduk: nomerInduk,
        gaji: gaji,
    }
    if (mode == 'tambah'){
      daftarKaryawan.push(Karyawanbaru)
     }else{
      // jika edit
      daftarKaryawan[mode] = Karyawanbaru
    
 } 
     document.getElementById('textNama').value="";
     document.getElementById('textmasaKerja').value="";
     document.getElementById('textnomerInduk').value="";
     document.getElementById('textGaji').value="";

     mode ="tambah";

     tampilkanKaryawan ();
}  

//
 const cariIndex = (nama) => {
    for (let i = 0; i<daftarKaryawan.length; i++) {
        if (daftarKaryawan[i].nama == nama ) {
           return i
        
        }
    }
 }
    //delet
 const hapusKaryawan = (target) => {
    const indexDihapus = cariIndex(target)
    if (indexDihapus !== -1){
    daftarKaryawan.splice(indexDihapus, 1)
    tampilkanKaryawan(); 
    }
 }

 const editKaryawan =(target) => {
    const indexEdit = cariIndex(target)
    console.log(target)
    console.log(indexEdit)
    console.log(daftarKaryawan[indexEdit])

    const karyawanDiedit = daftarKaryawan[indexEdit]

     document.getElementById('textNama').value = karyawanDiedit.nama 
     document.getElementById('textmasaKerja').value = karyawanDiedit.masaKerja
     document.getElementById('textnomerInduk').value = karyawanDiedit.nomerInduk
     document.getElementById('textGaji').value = karyawanDiedit.gaji
    
   mode = indexEdit
 }
   const batalEdit = (target) => {
    document.getElementById('textNama').value=""
    document.getElementById('textmasaKerja').value=""
    document.getElementById('textnomerInduk').value=""
    document.getElementById('textGaji').value=""
   
   }
    


