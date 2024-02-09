let item =  [
  {
    "title": "دنباله Cyberpunk 2077 وارد مراحل اولیه ساخت شد",
    "url": "assets/images/cyberpunk-2077-characters.webp",
    "text": "چندین توسعه‌دهنده باسابقه از بلیزارد اینترتینمنت، یوبیسافت، برادران وارنر و بایوور به تیم توسعه دنباله بازی Cyberpunk 2077 پیوستند."
  },
  {
    "title": "معرفی مستند The Social Dilemma",
    "url": "assets/images/the-social-dilemma-cover.webp",
    "text": "مستندی است چرت "
  },
  {
    "title": "نقد سریال True Detective: Night Country",
    "url": "assets/images/true-detective-night-country-oliver-tagaq-home.webp",
    "text": "بدترین سریال سال"
  },
  {
    "title": "نیم نگاه ریمستر The Last of Us Part 2 | آیا ارزش ۱۰ دلار را دارد؟",
    "url": "assets/images/the-last-of-us-part-2-abby.webp",
    "text": "بازی نکردم نمیدونم"
  },
  {
    "title": "بهترین سریال های کره ای",
    "url": "assets/images/best-south-korean-tv-shows1.webp",
    "text": "کلا کره ای ها بدنیستن"
  },
  {
    "title": "در کپکام چه میگذرد",
    "url": "assets/images/resident-evil-4-remake-review-zoomg.webp",
    "text": "بهترین نسخه کل سری"
  },
  {
    "title": "نقد های بازی final fantasy 7 rebirth چه زمانی منتشر میشود",
    "url": "assets/images/final-fantasy-7-rebirth.webp",
    "text": "بازی نکردم و نمیدونم "
  },
  {
    "title": "منتظر بازگشت مس میکلسن در Death Stranding 2 نباشید",
    "url": "assets/images/f8a4ecd5-6cd0-4bd2-8ae3-00bd445362b1.webp",
    "text": "نیستیم"
  },
  {
    "title": "کنسول نسل بعدی ایکس باکس احتمالا دیرتر از PS6 به بازار می‌آید",
    "url": "assets/images/xbox-logo.webp",
    "text": "برام مهم نیست"
  }
  
]
// root1 start--------------------------------------------
const som = document.getElementById('root1')
const el = document.createElement("div");
el.classList.add("card")
el.classList.add("w-100")
el.style.width = "18rem"
// root1 end--------------------------------------------
const div = document.createElement("div");
let htmlstring = ''
item.map((item,index) => {
  if (index <= 4) {
  htmlstring += `<img src=${item.url} class="card-img-top w-100" alt="..."> <div class="card-body"> <p class="card-text">${item.title}</p> </div> `
  }else {
    return;
  }
})
div.innerHTML = htmlstring
el.appendChild(div)
root1.appendChild(el)
// root2 start--------------------------------------------

const som2 = document.getElementById('root2')
const el2 = document.createElement("div");
el2.classList.add("card")
el2.classList.add("w-100")
el2.style.width = "18rem"

// root2 end--------------------------------------------
const div2 = document.createElement("div");
let htmlstring2 = ''
item.map((item,index) => {
  if (index <= 3) {
  htmlstring2 += `<img src=${item.url} class="card-img-top w-100" alt="..."> <div class="card-body"> <p class="card-text">${item.title}</p> </div> `
  }else{
    return;
  }
})
div2.innerHTML = htmlstring2
el2.appendChild(div2)
root2.appendChild(el2)


// ___________________________________________________________
const som3 = document.getElementById('root3')
const div3 = document.createElement("div");
let htmlstring3 = ''
item.map((item,index) => {
  if (index <= 8) {
    htmlstring3 += `<div class="row border p-3 " style="background-color: white;"><div class="col-md-4"><img class="w-100 h-100" src="${item.url}" alt=""></div><div class="col-md-8"><ul><li><h3>${item.title}</h3></li><li><p>${item.text}</p></li></ul></div></div>`
  }else{
      return;
    }
  })
div3.innerHTML = htmlstring3
root3.appendChild(div3)