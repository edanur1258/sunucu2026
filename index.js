
 console.log('Hello, World!');
//Değişken tanımı var let ve const ile değişken tanımlanabilir.
/*
ECMASCRİPT 6 ve sonrası için
*/

var adi="eda";
//DEĞİŞKEN
let yas=16;
//SABİT DEĞİŞKEN
const adres="İzmir";
//const sabit değişkenler tanımlandıktan sonra değeri değiştirilemez.sebebi güvenliktir.var değişkenindeki value değiştirilebilir.


//ECMASCRİPT 6 öncesi için
function topla(x,y){
    return x+y
}

//ECMASCRİPT 6 SONRASI
//Arrow function kullanım sebebi  değişken hafızasına atbildiğimiz için tekrar tekrar yazmamıza gerek kalmaz.

const add=(x,y)=>x+y;

if(x==10){
    console.log("x 10 a eşittir");
}
let total=0
for(let i=0;i<10;i++){
    total+=i;
}
//var ve let arasındaki farklar
//var function scope  - let ise block scope özelliğine sahiptir.

function topla(){
    let x=10
}

function test(){
    if(true){
        var degisken="Merhaba"
    }
    if (true)7{
        console.log(degisken)
    }
}
test()



//tekrar tanımlama özelliiği

//Hoisting

var adi="can";
console.kog(adi)
var adi;

//Atama işlemleri İmmutable (Değiştirilemez)
let adi="can"
const adres="İzmir"
adi="eda"
adres="Ankara" //Hata verir

//Rest Operatörü birden fazla yapıyı peşpeşe alır ve diziye çevirir.

function add(){
    console.log(arguments)
    let total=0
    for(let i=0;i<arguments.length;i++){
        total+=arguments[i]
    }

}
console.log(add(1,2,3,4,5))
// Bu eski yöntemdir. Yeni yöntemde rest operatörü kullanılır.

//Rest Operatörü

const add=(...args)=>{
    console.log(args);
    let total=0;
    for(let i=0;i<args.length;i++){
        total+=args[i];
    }
    return total;
}
console.log(add(1,2,3,4,5))

function addToCart(urun_adi,adet,fiyat){

}
addToCart("Elma",5,10);
addToCart("Armut",3,15);
addToCart("Karpuz",2,20);


let urunler={(,
    urunadi:"Elma",
    adet:5,
    fiyat:10
),
(
    urunadi:"Armut",
    adet:3,
    fiyat:15
),
(
    urunadi="Karpuz",
    adet=2,
    fiyat=20
)
}

function AddToCartNew(urunler)(
    console.log(urunler.urunadi)
    console.log(urunler.adet)
    console.log(urunler.fiyat)
)
AddToCartNew(urunler[0])




//Distracting İşlemi

let bolgeler=["Marmara","Ege","Akdeniz","Karadeniz","İç Anadolu","Doğu Anadolu","Güneydoğu Anadolu"]
console.log(bolgeler[0])


let[marmara,ege,akdeniz,karadeniz,ic_anadolu,dogu_anadolu,güneydogu_anadolu]=["Marmara","Ege","Akdeniz","Karadeniz","İç Anadolu","Doğu Anadolu","Güneydoğu Anadolu"]
console.log(ege)

//bu işlem ile bölge değişkeninden direk ege değişkenine atama işlemi yapılmış oldu.bu bölge indexi ile erişebilek garanti olmadığı için böyle yaparız.

let[urun_adi,adet,fiyat]=["Elma",5,10]
console.log(urun_adi)

let[urunler_adi,adet,fiyat]=[
    {urun_adi:"Elma",adet:5,fiyat:10},
    {urun_adi:"Armut",adet:3,fiyat:15},
    {urun_adi:"Karpuz",adet:2,fiyat:20},
]
console.log(urunler_adi.adet)

//filter

const sayilar=[1,2,3,4,5,6,7,8,9,10]
const tekSayilar=sayilar.filter(sayi=>sayi%2==0);
console.log(tekSayilar)

//find

const numbers=[1,2,3,4,5,6,7,8,9,10]

const ciftsayilar=numbers.find(function(sayi)){
    return sayi%2==0;
}

//map her sayiyi 2 ile çarpar.

const num=[1,2,3,4,5]

const total=num.map(num=>num*2)
console.log(katsayi)

//reduce

const num=[1,2,3,4,5]
 
const total=num.reduce((acc,curr)=>acc+curr,0)

console.log(topam)
//acc birikmiş değer curr ise şuanki değeri temsil eder.0 ise başlangıç değeridir.

//foreach 



//hata denetimi try catch

try{
    const results=10/0
    console.log(results)
}catch(error){
    console.log("Hata :"+error)
}finally{
    console.log("İşlem tamamlandı.")
}

function bolmeislemi(x,y){
    if(y==0){
        throw new Error("Sıfıra Bölme Hatası")
    }

    return x/y
}


try{
    const sonuc=bolmeislemi(10,0)
    console.log("Sonuc",sonuc)
    }
catch(error){
    console.log("Hata yakalandı"+error)
}


console.log("Merhaba Eda! Çalışıyorum 🚀");
