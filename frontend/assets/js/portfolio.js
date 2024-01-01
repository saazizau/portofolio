let mainDOM = document.getElementById('main');
let portfolio_id = localStorage.getItem('portfolio_id') || 'jhpp'; 

document.addEventListener('DOMContentLoaded', function(){
  const portfolioFunctions = {
    'sansuniform': sansuniform,
    'sab_calculator': sab_calculator,
    'generous_canteen': generous_canteen,
    'jhpp': jhpp,
    'learn_logistic_regression': learn_logistic_regression,
    'learn_random_forest_classifier': learn_random_forest_classifier,
  };

  let selectedFunction = portfolioFunctions[portfolio_id];

  if (selectedFunction) {
      selectedFunction();
  }
});

function sansuniform(){
    let judul = "Sansuniform";
    let linkGambar = [
        "assets/img/portfolio/sansuniform/login.png",
        "assets/img/portfolio/sansuniform/laporan.png",
        "assets/img/portfolio/sansuniform/supply.png",
        "assets/img/portfolio/sansuniform/transaksi.png"

    ];
    let kategori = "Pemrograman, Database";
    let deskripsi = 
    `
    Ini merupakan proyek kelompok pada mata kuliah database. Saya mengerjakan proyek pada bagian design database, implementasi, dan pemrograman aplikasinya.
    Aplikasi Sansuniform menggunakan DBMS MySQL dan dibangun dengan bahasa pemrograman java.
    `;
    let tanggal = "Juni 2023";
    let repository = [
        "Proyek Sansuniform",
        "https://docs.google.com/document/d/1LYMDxsMPR_RoDy2SuidtL28CVGBYq3VD/edit?usp=sharing&ouid=112934122837615994060&rtpof=true&sd=true"
    ];
    let tambahan = 
    `
    `;
    buildDetails(judul, linkGambar, kategori, deskripsi, tanggal, repository, tambahan);
}

function jhpp(){
    let judul = "Jabodetabek House Price Prediction";
    let linkGambar = [
        "assets/img/portfolio/jhpp/tumb.jpg"

    ];
    let kategori = "Machine Leaning, Data Science";
    let deskripsi = 
    `
    Ini merupakan proyek mata kuliah matematika komputasi. Proyek tersebut merupakan proyek untuk implementasi dan membauat model algoritma neural network.
    Namun saya lanjutkan hingga akhirnya model tersebut saya deploy menggunakan Flask dan ini merupakan proyek deploy model machine learning pertama saya.
    `;
    let tanggal = "December 2023";
    let repository = [
        "Github repository",
        "https://github.com/saazizau/ml_project/tree/master/jabodetabek_house_price_predictions"
    ];
    let tambahan = 
    `
    <li><strong>ML Deploy URL</strong>: <a target="_blank" href="ml-deploy/jabodetabek-house-price-predictions/index.html">Jabodetabek House Price Predictions</a></li>
    `;
    buildDetails(judul, linkGambar, kategori, deskripsi, tanggal, repository, tambahan);
}

function sab_calculator(){
    let judul = "Sab Calculator";
    let linkGambar = [
        "assets/img/portfolio/sab calculator/home.png",
        "assets/img/portfolio/sab calculator/calculator.png"

    ];
    let kategori = "Programing";
    let deskripsi = 
    `
    Sab Calculator merupakan proyek pertama saya ketika mempelajari bahasa pemrograman. Sab Calculator dibuat menggunakan bahasa pemrograman C++.
    Program ini dibuat bukan hanya untuk melatih skill programing saya, tetapi juga merupakan suatu komputasi dari metode-metode yang saya pelajari pada saat kuliah.
    Program ini sangat membantu perkuliahan saya dan teman-teman saya karena perhitungannya yang lebih cepat dan presisi. Apabila dilihat lebih luas, ini seperti implementasi Riset Operasi.
    Beberapa teman saya terlibat dalam pembuatan Sab Calculator khusunya sebagai tester.
    `;
    let tanggal = "2022";
    let repository = [
        "",
        ""
    ];
    let tambahan = 
    `
    <li><strong>Link Download</strong>: <a target="_blank" href="https://drive.google.com/file/d/17bEp6TQktyr8eXBlj_8q9yi8WUpTJ9DH/view?usp=sharing">sabcalculator.exe</a></li>
    `;
    buildDetails(judul, linkGambar, kategori, deskripsi, tanggal, repository, tambahan);
}

function generous_canteen(){
    let judul = "Generous Canteen";
    let linkGambar = [
        "assets/img/portfolio/generous canteen/landingpage.png",
        "assets/img/portfolio/generous canteen/loginpage.png",
        "assets/img/portfolio/generous canteen/adminpage.png",
        "assets/img/portfolio/generous canteen/itempage.png",
        "assets/img/portfolio/generous canteen/updateitem.png"

    ];
    let kategori = "Programing, Web, Database";
    let deskripsi = 
    `
    Generous Canteen merupakan webiste yang dibuat untuk memudahkan pengelolaan kantin kejujuran.
    Website ini bertujuan untuk memudahkan dalam penambahan stok barang, laporan barang harian, dsb.
    Saat ini Generous Canteen masih dalam tahap pembuatan dan pengembangan. Saya berperan sebagai Full Stack Developernya.
    `;
    let tanggal = "Desember 2023";
    let repository = [
        "",
        ""
    ];
    let tambahan = 
    `
    <li><strong>Dummy Web </strong>: <a target="_blank" href="https://sabrinaazizaulia.com/generous canteen/frontend/">Generous Canteen</a></li>
    `;
    buildDetails(judul, linkGambar, kategori, deskripsi, tanggal, repository, tambahan);
}

function learn_logistic_regression(){
    let judul = "Prediksi Calon Pembeli Mobil";
    let linkGambar = [
        "assets/img/portfolio/pcpm/tumb.png"

    ];
    let kategori = "Machine Leaning, Data Science";
    let deskripsi = 
    `
    Ini merupakan studi kasus untuk mengetahui apakah sesorang berpotensi membeli mobil atau tidak berdasarkan status pernikahan, jenis kelamin, penghasilan, dll. 
    Studi kasus ini bertujuan untuk mempelajari bagaimana praktik penggunaan metode machine learning Logistic Regrresion.
    `;
    let tanggal = "December 2023";
    let repository = [
        "Github repository",
        "https://github.com/saazizau/learning_ml/tree/master/logistic"
    ];
    let tambahan = 
    `
     `;
    buildDetails(judul, linkGambar, kategori, deskripsi, tanggal, repository, tambahan);
}

function learn_random_forest_classifier(){
    let judul = "Klasifikasi Pendapatan Warga Amerika";
    let linkGambar = [
        "assets/img/portfolio/aic/tumbslide.png"

    ];
    let kategori = "Machine Leaning, Data Science";
    let deskripsi = 
    `
    Ini merupakan studi kasus untuk mengetahui berapa penghasilan warga amerika didasarka pada pendidikan, jenis kelamin, hubungan, dll.
    Studi kasus ini bertujuan untuk mempelajari bagaimana praktik penggunaan metode machine learning Random Forest Classifier. 
    Karena ini hanya sebuah latihan penggunaan metode, maka tida ada analisis data di dalamnya. Untuk analisis yang lebih lanjut akan ada pada proyek.
    `;
    let tanggal = "December 2023";
    let repository = [
        "Github repository",
        "https://github.com/saazizau/learning_ml/tree/master/random-forest"
    ];
    let tambahan = 
    `
     `;
    buildDetails(judul, linkGambar, kategori, deskripsi, tanggal, repository, tambahan);
}

function buildDetails(judul, linkGambar, kategori, deskripsi, tanggal, repository, tambahan=""){
    let strImage = '';

    for (var i = 0; i < linkGambar.length; i++) {
      strImage +=
        `
        <div class="swiper-slide">
          <img src="${linkGambar[i]}" alt="">
        </div>
        `;
    }

    console.log(strImage);

    let strMain =
      `
    <!-- ======= Breadcrumbs Section ======= -->
    <section class="breadcrumbs">
      <div class="container">
        <div class="d-flex justify-content-between align-items-center">
          <h2>Portfolio Details</h2>
          <ol>
            <li><a href="index.html">Home</a></li>
            <li><a href="index.html#portfolio">Portfolio</a></li>
            <li>${judul}</li>
          </ol>
        </div>
      </div>
    </section><!-- Breadcrumbs Section -->

    <!-- ======= Portfolio Details Section ======= -->
    <section id="portfolio-details" class="portfolio-details">
      <div class="container">
        <div class="row gy-4">
          <div class="col-lg-8">
            <div class="portfolio-details-slider swiper">
              <div class="swiper-wrapper align-items-center">
                ${strImage}
              </div>
              <div class="swiper-pagination"></div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="portfolio-info">
                <h3>Informasi Proyek</h3>
                <ul>
                    <li><strong>Ketegori </strong>: ${kategori}</li>
                    <li><strong>Tanggal </strong>: ${tanggal}</li>
                    <li><strong>Repository</strong>: <a target="_blank" href="${repository[1]}">${repository[0]}</a></li>
                    ${tambahan}
                </ul>
                </div>
                <div class="portfolio-description">
                <h2>Deskripsi :</h2>
                <p style="text-align: justify;">
                    ${deskripsi}
                </p>
            </div>            
          </div>
        </div>
      </div>
    </section><!-- End Portfolio Details Section -->    
    `;

    mainDOM.innerHTML = strMain;

    // Initialize Swiper after updating the DOM
    var swiper = new Swiper('.portfolio-details-slider', {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 3000, // Set the delay in milliseconds (e.g., 5000ms for 5 seconds)
            disableOnInteraction: false, // Set to false to keep autoplaying even when user interacts with the slider
        },
    });
}


/*
        <div class="portfolio-details-slider swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
              <div class="swiper-wrapper align-items-center" id="swiper-wrapper-a1049760ed3d86dfa" aria-live="off" style="transform: translate3d(-3424px, 0px, 0px); transition-duration: 400ms;"><div class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active" data-swiper-slide-index="3" role="group" aria-label="4 / 4" style="width: 856px;">
                  <img src="assets/img/portfolio/sansuniform/transaksi.png" alt="">
                </div>

                <div class="swiper-slide swiper-slide-duplicate-next" data-swiper-slide-index="0" role="group" aria-label="1 / 4" style="width: 856px;">
                  <img src="" alt="">
                </div>

                <div class="swiper-slide" data-swiper-slide-index="1" role="group" aria-label="2 / 4" style="width: 856px;">
                  <img src="assets/img/portfolio/sansuniform/laporan.png" alt="">
                </div>

                <div class="swiper-slide swiper-slide-prev" data-swiper-slide-index="2" role="group" aria-label="3 / 4" style="width: 856px;">
                  <img src="assets/img/portfolio/sansuniform/supply.png" alt="">
                </div>

                <div class="swiper-slide swiper-slide-active" data-swiper-slide-index="3" role="group" aria-label="4 / 4" style="width: 856px;">
                  <img src="assets/img/portfolio/sansuniform/transaksi.png" alt="">
                </div>

              <div class="swiper-slide swiper-slide-duplicate swiper-slide-next" data-swiper-slide-index="0" role="group" aria-label="1 / 4" style="width: 856px;">
                  <img src="" alt="">
                </div></div>
              <div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"><span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 1"></span><span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 2"></span><span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 3"></span><span class="swiper-pagination-bullet swiper-pagination-bullet-active" tabindex="0" role="button" aria-label="Go to slide 4" aria-current="true"></span></div>
            <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
*/