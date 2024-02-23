//Math object


//Math, Math.Pi, Math.E

// console.log(Math)
// console.log(Math.E)
// console.log(Math.Pi)

// const area = 8.5

//sonnig eng yaqin butun qismga yaxlitlaydi
//Math.round()
// console.log(Math.round(area));

//sonnig  yaqin kichik butun qismga qarab yaxlitlaydi
//Math.floor()
// console.log(Math.floor(area));

//eng yaqin kattasiga butun qism qarab yaxlitlaydi
//Math.ceil()
// console.log(Math.ceil(area))

//sonning faqat butun qismini qaytaradi
//Math.trunc() 
// console.log(Math.trunc(area))

// 0 va 1 oralig'ida ixtiyoriy raqamlarni qaytaradi
//Math.random()

// const randomNumber = Math.trunc(Math.random()*10)+1
// console.log(randomNumber)


// =====================================================


//  Ko'p ishlatiladigan string metodlar

let email = ` pulatovvmukhammadrizo@gmail.com  ` 

//indexOf()
// let result = email.indexOf(`l`)
// console.log(result)
 // bu qaysi pazitsiyada turganini xarakterni aniqlaydi


//lastIndexOf()
// let result = email.lastIndexOf(`m`)
// console.log(result)
// indexof ga uxshash ammo bu ohiridan boshlaydi


//slice()
// let result = email.slice(4,7)
// console.log(result)
// Agar biz slice ichiga bitta raqam yozsak usha raqamdan keyingi qolgan so'zlarni hammasini ekranga chiqarib beradi


//substr()
// slice ni eski varianti
// let result = email.substr(4,10) 
// shu yerda bu boshqacha ishlaydi 4 raqamdagi stringni olib  keyingi songacha chiqarmaydi  xuddi slice ga o'xshab birinchi raqamdan keyin nechi son turgan bo'lsa o'ashnacha stringni chiqarib beradi
// console.log(result)


//replace()
//  let result = email.replace(`p`, `t`)
//  console.log(result)
// bu method  yozilgan narsalarni o'zgartirib beradi


//replaceAll()
//  let result = email.replace(`p`, `t`)
//  console.log(result)
// bu huddi replace kabi ishlaydi ammo bu bajaradigan funksiyasi hamma yozilganlarga tegishli buladi


//chartAt()
// let  result = email.charAt(`5`)
// console.log(result)
// bu slice ga o'xshab ketadi ammo bunda yozilgan raqam urnidagi stringni olib beradi


//ToUppercase
// let result = email.toUpperCase()
// console.log(result)
// bu metodimiz nomidan ham malum upperace yani stringlarni katta qilib beradi


//ToLowercase
// let result = email.toLowercase()
// console.log(result)
// bu metodimiz  upperacening teskarisi stringlarni kichik qilib beradi


//trim()
// let result = email.trim()
// console.log(result)
// bu metod stringni boshi va oxiridagi bo'sh prabellarni olib tashlaydi


//split()
// let result = email.split(``)
// console.log(result)
// bu method array ko'rinishida qaytaradi va qavs ichiga qaysidur stringni qo'ysak o'shani olib tashlaydin = eamil,split(``)  <== ichiga
