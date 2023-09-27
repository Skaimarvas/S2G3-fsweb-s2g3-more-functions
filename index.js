// Aşağıdaki görevleri tamamlayın

/*
  GÖREV 1
  - Input:  Bir dosya yolunu (path) parametre olarak alacak bir fonksiyon oluştur.
  - Output: Yazacağın fonksiyon, verilen bir dosya adresideki(path) dosyanın adını vermeli.
  * İpucu:  Dosya adresinin / işaretleri ile bölümlendiğine dikkat et.

  örnek input:  "C:/Users/johnsmith/Music/Beethoven_5.mp3"
  örnek output: "Beethoven_5.mp3"

  örnek input:  "Beethoven_5.mp3"
  örnek output: "Beethoven_5.mp3"

  örnek input:  ""
  örnek output: ""
*/

function dosyaAdiniBul(path) {
  const yolBol = path.split("/");
  const dosya = yolBol[yolBol.length - 1];
  return dosya;
}

console.log(
  "Görev 1:",
  dosyaAdiniBul(
    "C:Users/lenovo/Desktop/Workintech-0923/Proje Çözümleri/S2G1-index"
  )
);

/*
  GÖREV 2
  - Input:  Bir sayı arrayini parametre olarak alacak bir fonksiyon oluştur.
  - Output: Yazacağın fonksiyon input olarak aldığı sayı arrayinin aritmetik ortalamasını dönmeli.

  örnek input:  []
  örnek output: null

  örnek input:  [4]
  örnek output: 4
  
  örnek input:  [50, -26, 153, 7]
  örnek output: 46

  örnek input:  [109, 216, 288, 143, 71, 185, -278, 194, 5]
  örnek output: 104
*/
const bosDizi = [];
const sayiDizi = [109, 216, 288, 143, 71, 185, -278, 194, 5];
const sayiDizi2 = [50, -26, 153, 7];

const tekSayi = [4];

function ortalamaBul(arrDizi) {
  if (arrDizi.length === 0) {
    return null;
  }
  if (arrDizi.length === 1) {
    return arrDizi[0];
  }
  let diziToplam = 0;

  for (let i = 0; i < arrDizi.length; i++) {
    diziToplam += arrDizi[i];
  }

  const aritmetikOrtalama = diziToplam / arrDizi.length;

  return aritmetikOrtalama;
}

console.log("Görev 2:", ortalamaBul(sayiDizi));
console.log("Görev 2: Bos dizi :", ortalamaBul(bosDizi));
console.log("Görev 2: Çok sayıda dizi:", ortalamaBul(sayiDizi2));
console.log("Görev 2: Tek sayı:", ortalamaBul(tekSayi));

/*
  GÖREV 3
  - Input:  Bir sayı arrayini ve ortalama bulmaya yarayacak bir fonksiyonu parametre olarak alacak bir fonksiyon oluştur.
  - Output: Yazacağın fonksiyon input olarak aldığı sayı arrayinin aritmetik ortalamasından büyük ya da eşit elemanlardan oluşan bir array dönmeli.
  * Çağırırken kendi ortalama fonksiyonunla çağırabilirsin, ama parametrenin tanımlama aşamasında soyut bir ifade olduğunu unutma.
  * f(x) = 2x+5 içerisindeki x değeri gibi.

  örnek input:  []
  örnek output: null

  örnek input:  [4]
  örnek output: 4
  
  örnek input:  [50, -26, 153, 7]
  örnek output: [50, 153]

  örnek input:  [109, 216, 288, 143, 71, 185, -278, 194, 5]
  örnek output: [109, 216, 288, 143, 185, 194]
*/

const bosDizi1 = [];
const sayiDizi1 = [109, 216, 288, 143, 71, 185, -278, 194];
const sayiDizi3 = [50, -26, 153, 7];

const tekSayi1 = [5];

// function ortalamadanBuyukleriBul(arrSayi, ortalamaFonksiyonu) {
//   if (!arrSayi || arrSayi.length === 0) {
//     return null;
//   }
//   const ortalama = ortalamaFonksiyonu(arrSayi);
//   const buyuk = arrSayi.filter((sayi) => sayi >= ortalama);
//   return buyuk;
// }

function ortalamadanBuyukleriBul(diziArr, ortBul) {
  if (diziArr.length === 0) {
    return null;
  }
  if (diziArr.length === 1) {
    return diziArr;
  }
  let ortBuyukSayilar = [];
  const ortSayi = ortBul(diziArr);

  for (let i = 0; i < diziArr.length; i++) {
    if (diziArr[i] >= ortSayi) {
      ortBuyukSayilar.push(diziArr[i]);
    }
  }
  return ortBuyukSayilar;
}

console.log(
  "Görev 3: Boş dizi:",
  ortalamadanBuyukleriBul(bosDizi1, ortalamaBul)
);

console.log(
  "Görev 3: Tek sayı:",
  ortalamadanBuyukleriBul(tekSayi1, ortalamaBul)
);

console.log(
  "Görev 3: Az sayıda dizi:",
  ortalamadanBuyukleriBul(sayiDizi3, ortalamaBul)
);

console.log(
  "Görev 3: Çok sayıda dizi:",
  ortalamadanBuyukleriBul(sayiDizi1, ortalamaBul)
);

/* !!!! Burdan aşağısını değiştirmeyin !!!! */
function as() {
  console.log("Kodlar sorunsuz çalışıyor!");
  return "sa";
}
as();
export { dosyaAdiniBul, ortalamaBul, ortalamadanBuyukleriBul, as };
