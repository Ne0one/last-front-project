let item =  [
  {
    "title": "معرفی مستند The Social Dilemma",
    "url1": "assets/images/the-social-dilemma-cover.webp"
  },
  {
    "title": "نقد سریال True Detective: Night Country",
    "url2": "assets/images/the-social-dilemma-cover.webp"
  },
  {
    "title": "نیم نگاه ریمستر The Last of Us Part 2 | آیا ارزش ۱۰ دلار را دارد؟",
    "url3": "assets/images/the-last-of-us-part-2-abby.webp"
  },
  {
    "title": "بهترین سریال های کره ای",
    "url4": "assets/images/best-south-korean-tv-shows1.webp"
  },
  {
    "title": "فیلم های ایرانی و خارجی ",
    "url5": "assets/images/f8a4ecd5-6cd0-4bd2-8ae3-00bd445362b1.webp"
  }
]


const root1 = document.getElementById('gall');

let htmlstring = ``;
htmlstring += ` <div class="row gy-0 gx-0 d-none d-md-flex" >`;
htmlstring += ` <div class="col-md-3">`;
htmlstring += `   <div class="imgcontainer" style="height: 12rem;">`;
htmlstring += `         <img src=${item.url1} alt="" class="img-fluid " style="height: 12rem;">`;
htmlstring += `         <div class="bottom-right" style="color: rgb(0, 0, 0);"><p>معرفی مستند The Social Dilemma</p></div>`;
htmlstring += `   </div>`;
htmlstring += `   <div  class="imgcontainer" style="height: 12rem;">`;
htmlstring += `         <img src=${item.url2} alt="" class="img-fluid " style="height: 12rem;">`;
htmlstring += `         <div class="bottom-right" style="color: rgb(243, 227, 227);"><p>نقد سریال True Detective: Night Country</p></div>`;
htmlstring += `   </div>`;
htmlstring += ` </div>`;
htmlstring += ` <div class="col-md-6">`;
htmlstring += `   <div class="imgcontainer">`;
htmlstring += `         <img src=${item.url3} alt="" class="img-fluid " style="height: 24rem;">`;
htmlstring += `         <div class="bottom-right" style="color: rgb(243, 227, 227);"><p>نیم نگاه ریمستر The Last of Us Part 2 | آیا ارزش ۱۰ دلار را دارد؟</p></div>`;
htmlstring += `   </div>`;
htmlstring += ` </div>`;
htmlstring += ` <div class="col-md-3">`;
htmlstring += `   <div class="imgcontainer">`;
htmlstring += `         <img src=${item.url4} alt="" class="img-fluid " style="height: 12rem;">`;
htmlstring += `         <div class="bottom-right" style="color: rgb(0, 0, 0);"><p>بهترین سریال های کره ای</p></div>`;
htmlstring += `   </div>`;
htmlstring += `   <div class="imgcontainer">`;
htmlstring += `         <img src=${item.url5}, alt="" class="img-fluid " style="height: 12rem;">`;
htmlstring += `         <div class="bottom-right" style="color: rgb(255, 255, 255);"><p>فیلم های ایرانی و خارجی </p></div>`;
htmlstring += `   </div>`;
htmlstring += ` </div>`;
htmlstring += ` </div>`;
htmlstring += ` <div class="row gy-0 gx-0 d-md-none" id="gall2">`;
htmlstring += ` <div class="col-md-3  col-xs-12">`;
htmlstring += `   <div class="imgcontainer w-100 h-xs-100">`;
htmlstring += `         <img src=${item.url1} alt="" class="img-fluid  w-100 h-xs-100">`;
htmlstring += `         <div class="bottom-right" style="color: rgb(0, 0, 0);"><p>معرفی مستند The Social Dilemma </p></div>`;
htmlstring += `   </div>`;
htmlstring += `   <div  class="imgcontainer w-100 h-xs-100">`;
htmlstring += `         <img src=${item.url2} alt="" class="img-fluid  w-100 h-xs-100">`;
htmlstring += `         <div class="bottom-right" style="color: rgb(243, 227, 227);"><p>نقد سریال True Detective: Night Country</p></div>`;
htmlstring += `   </div>`;
htmlstring += ` </div>`;
htmlstring += ` <div class="col-md-6 col-xs-12">`;
htmlstring += `   <div class="imgcontainer">`;
htmlstring += `         <img src=${item.url3} alt="" class="img-fluid " style="height: 24rem;">`;
htmlstring += `         <div class="bottom-right" style="color: rgb(243, 227, 227);"><p>نیم نگاه ریمستر The Last of Us Part 2 | آیا ارزش ۱۰ دلار را دارد؟</p></div>`;
htmlstring += `   </div>`;
htmlstring += ` </div>`;
htmlstring += ` <div class="col-md-3 col-xs-12">`;
htmlstring += `   <div class="imgcontainer">`;
htmlstring += `         <img src=${item.url4} alt="" class="img-fluid  w-100 h-xs-100">`;
htmlstring += `         <div class="bottom-right" style="color: rgb(0, 0, 0);"><p>بهترین سریال های کره ای</p></div>`;
htmlstring += `   </div>`;
htmlstring += `   <div class="imgcontainer">`;
htmlstring += `         <img src=${item.url5} alt="" class="img-fluid  w-100 h-xs-100">`;
htmlstring += `         <div class="bottom-right" style="color: rgb(255, 255, 255);"><p>فیلم های ایرانی و خارجی</p></div>`;
htmlstring += `   </div>`;
htmlstring += `</div>`;
htmlstring +=`</div>`;
htmlstring += `<div class="row">`
htmlstring += `<div class="imgcontainer col-xs-12 ">`
htmlstring += `<img src="./assets/images/gifzoomg-1300-100.gif" alt="" class="w-100">`
htmlstring += "</div>"
htmlstring += "</div>"
// root1.innerHTML = htmlstring





// const som = document.getElementById('root1')
// const som2 = document.getElementById('root2')
// const el = document.createElement("div");
// el.classList.add("card")
// el.classList.add("w-100")
// el.style.width = "18rem"
// // --------------------------------------------
// const el2 = document.createElement("div");
// el.classList.add("card")
// el.classList.add("w-100")
// el.style.width = "18rem"
// // --------------------------------------------
// const div = document.createElement("div");
// let htmlstring = ''
// item.map((item) => {
// htmlstring += `<img src=${item.url} class="card-img-top w-100" alt="..."> <div class="card-body"> <p class="card-text">${item.title}</p> </div> `
// })
// div.innerHTML = htmlstring
// el.appendChild(div)
// el2.appendChild(div)
// root1.appendChild(el)
// root2.appendChild(el2)

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