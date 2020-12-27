// Function
{var $_ = function (selector, node = document) {
  return node.querySelector(selector);
};

var $$_ = function (selector, node = document) {
  return node.querySelectorAll(selector);
};

var createElement = function (element, elementClass, text) {
  var newElement = document.createElement(element);

  if (elementClass) {
    newElement.setAttribute('class', elementClass);
  }

  if (text) {
    newElement.textContent = text;
  }

  return newElement;
};}
// Function

var elMenuToggler = $_(`.js-site-header__toggler`);
var elMenu = $_(`.page-body`);
var elMenuOpen = $_(`.page-body--open`);

elMenuToggler.addEventListener(`click`, function () {
  // console.log(`ishladi`);
  elMenu.classList.toggle(`page-body--open`);
});

// Videolarga array ochamiz va ichiga obyektda ma'lumotlarni joylaymiz
var elVideos = [
  // obyekt ochamiz va vidoning nomi, rasmning joylashgan joyi, video ko'rilgan kun va necha marta ko'rilgani, vidoening avtori(bu yerda hamma videolar bir avtorga tegishli bo'lsa ham kiritib kettim sababi avtor o'zgarishi mumkin), va videoning davomiyligi
  {
    videoTitle: `A Brief History Of Creation`,
    videoImage: `img/video-img-1/video-img-1.png`,
    videoViews: `80k views  ·  3 days ago`,
    videoAutor: `Dollie Blair`,
    videoTime: `4:15`
  },
  {
    videoTitle: `Selecting The Right Hotel`,
    videoImage: `img/video-img-2/video-img-2.png`,
    videoViews: `123k views  ·  1 months ago`,
    videoAutor: `Dollie Blair`,
    videoTime: `8:00`
  },
  {
    videoTitle: `Asteroids`,
    videoImage: `img/video-img-3/video-img-3.png`,
    videoViews: `43k views  ·  12 days ago`,
    videoAutor: `Dollie Blair`,
    videoTime: `5:32`
  },
  {
    videoTitle: `Telescopes 101`,
    videoImage: `img/video-img-4/video-img-4.png`,
    videoViews: `11k views  ·  6 months ago`,
    videoAutor: `Dollie Blair`,
    videoTime: `6:40`
  },
  {
    videoTitle: `Medical Care Is Just`,
    videoImage: `img/video-img-5/video-img-5.png`,
    videoViews: `18k views  ·  2 days ago`,
    videoAutor: `Dollie Blair`,
    videoTime: `1:45`
  },
  {
    videoTitle: `Moon Gazing`,
    videoImage: `img/video-img-6/video-img-6.png`,
    videoViews: `67k views  ·  4 months ago`,
    videoAutor: `Dollie Blair`,
    videoTime: `1:45`
  },
];

var elRecommendVideo = [
  {
    videoRecTitle: `Dude You Re Getting A Telescope`,
    videoRecImage: `img/recommend-img-1/recommend-img-1.png`,
    videoRecViews: `34k views  ·  5 months ago`,
    videoRecAutor: `Gussie French`,
    videoRecTime: `3:40`
  },
  {
    videoRecTitle: `Moon Gazing`,
    videoRecImage: `img/recommend-img-2/recommend-img-2.png`,
    videoRecViews: `54k views  ·  11 months ago`,
    videoRecAutor: `Edward Osborne`,
    videoRecTime: `2:12`
  },
  {
    videoRecTitle: `Moon Gazing`,
    videoRecImage: `img/recommend-img-2/recommend-img-2.png`,
    videoRecViews: `125k views  ·  4 months ago`,
    videoRecAutor: `Dollie Blair`,
    videoRecTime: `2:12`
  },
];

var elOtherVideos = [
  {
    otherVideoTitle: `Astronomy Or Astrology`,
    otherVideoImage: `img/food-img-1/food-img-1.png`,
    otherVideoViews: `240k views  ·  4 months ago`,
    otherVideoAutor: `Food & Drink`,
    otherVideoTime: `7:36`
  },
  {
    otherVideoTitle: `Advertising Outdoors`,
    otherVideoImage: `img/food-img-2/food-img-2.png`,
    otherVideoViews: `13k views  ·  15 days ago`,
    otherVideoAutor: `Food & Drink`,
    otherVideoTime: `2:19`
  },
  {
    otherVideoTitle: `Radio Astronomy`,
    otherVideoImage: `img/food-img-1/food-img-1.png`,
    otherVideoViews: `1k views  ·  11 months ago`,
    otherVideoAutor: `Food & Drink`,
    otherVideoTime: `9:05`
  },
  {
    otherVideoTitle: `A Good Autoresponder`,
    otherVideoImage: `img/food-img-4/food-img-4.png`,
    otherVideoViews: `45k views  ·  2 months ago`,
    otherVideoAutor: `Food & Drink`,
    otherVideoTime: `3:40`
  },
  {
    otherVideoTitle: `Baby Monitor Technology`,
    otherVideoImage: `img/food-img-2/food-img-2.png`,
    otherVideoViews: `86k views  ·  7 days ago`,
    otherVideoAutor: `Food & Drink`,
    otherVideoTime: `1:56`
  },
  {
    otherVideoTitle: `Asteroids`,
    otherVideoImage: `img/food-img-2/food-img-2.png`,
    otherVideoViews: `123k views  ·  4 months ago`,
    otherVideoAutor: `Dollie Blair`,
    otherVideoTime: `4:28`
  },
];

// elVideosList nomli o'zgaruvchi ochib uni documentdan topib olamiz
var elVideosList = $_(`.js-videos-list-group`);
var elRecommendList = $_(`.js-recommend-list`);
var elOtherList = $_(`.js-site-content__other-list`);
// elVideosTemplate nomli o'zgaruvchiga templetening qayerda turganligini topib uni shunga tenglab qo'yamiz
var elVideosTemplate = $_(`.site-content__videos-template`).content;
var elRecommendTemplate = $_(`.site-content__recommend-template`).content;
var elOtherTemplate = $_(`.site-content__other-template`).content;
// elVideosFragment nomli fragment ochib olamiz bu bizga ma'lumotlarni bittada ko'rsatishga kerak bo'ladi
var elVideosFragment = document.createDocumentFragment();
var elRecommendFragment = document.createDocumentFragment();
var elOtherFragment = document.createDocumentFragment();

// endi elVideos nomli arrayni forEachda aylanib chiqamiz
  elVideos.forEach(function (video) {
    // elVideosItem nomli o'zgaruvchiga har biridan original qolipdan nusxa ko'chiramiz
  var elVideosItem = elVideosTemplate.cloneNode(true);
  // endi shu qolipning ichidan o'zgarishi kerak bo'lgan elementlarni topib olamiz, va ularning textContenti yoki o'zgarishi kerak bo'lgan atributlarini har bir arrayning ichidagi obyektlarga tenglab chiqamiz
  $_(`.js-site-content__inner-img`, elVideosItem).src = video.videoImage;
  $_(`.js-site-content__inner-time`, elVideosItem).textContent = video.videoTime;
  $_(`.js-site-content__videos-title`, elVideosItem).textContent = video.videoTitle;
  $_(`.js-site-content__info-views`, elVideosItem).textContent = video.videoViews;
  // yuqoridagi fragmentga shu original qolipning nusxasini bolalari sifatida qo'shib qo'yamiz
  elVideosFragment.appendChild(elVideosItem);
});
// va htmlda mavjud bo'lgan ulga fragmentni bolalari sifatida qo'shib qo'yamiz
(elVideosList).appendChild(elVideosFragment);

// RECOMMEND
elRecommendVideo.forEach(function (recommend) {
  var elRecommendItem = elRecommendTemplate.cloneNode(true);

  $_(`.js-site-content__recommend-inner-img`, elRecommendItem).src = recommend.videoRecImage;
  $_(`.js-site-content__recommend-inner-time`, elRecommendItem).textContent = recommend.videoRecTime;
  $_(`.js-site-content__recommend-title`, elRecommendItem).textContent = recommend.videoRecTitle;
  $_(`.js-site-content__recommend-info-views`, elRecommendItem).textContent = recommend.videoRecViews;

  elRecommendFragment.appendChild(elRecommendItem);
});

(elRecommendList).appendChild(elRecommendFragment);

// OTHERVIDEOS
elOtherVideos.forEach(function(other) {
  var elOtherItem = elOtherTemplate.cloneNode(true);

  $_(`.js-site-content__other-img`, elOtherItem).src = other.otherVideoImage;
  $_(`.js-site-content__other-time`, elOtherItem).textContent = other.otherVideoTime;
  $_(`.js-site-content__other-title`, elOtherItem).textContent = other.otherVideoTitle;
  $_(`.js-site-content__other-views`, elOtherItem).textContent = other.otherVideoViews;

  elOtherFragment.appendChild(elOtherItem);
});

(elOtherList).appendChild(elOtherFragment);



