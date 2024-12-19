$(".openbtn").click(function () {
    $(this).toggleClass('active');
    $("#g-nav").toggleClass('panelactive');
    $(".circle-bg").toggleClass('circleactive');
});

$("#g-nav a").click(function () {
    $(".openbtn").removeClass('active');
    $("#g-nav").removeClass('panelactive');
    $(".circle-bg").removeClass('circleactive');
});

// スライドショーの制御
function slideShow() {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    
    // 最初のスライドを表示
    slides[0].classList.add('active');
    
    setInterval(() => {
        // 現在のスライドを非表示
        slides[currentSlide].classList.remove('active');
        
        // 次のスライドのインデックスを計算
        currentSlide = (currentSlide + 1) % slides.length;
        
        // 次のスライドを表示
        slides[currentSlide].classList.add('active');
    }, 5000); // 5秒ごとに切り替え
}

// DOMの読み込み完了後に実行
$(document).ready(function() {
    slideShow();
});

document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    
    // 初期状態ですべてのスライドを右側に配置
    slides.forEach((slide, index) => {
        if (index !== 0) {
            slide.style.transform = 'translateX(100%)';
        }
    });
    
    // 最初のスライドを表示
    slides[0].classList.add('active');
    
    function nextSlide() {
        // 現在のスライドを左に移動
        slides[currentSlide].classList.add('prev');
        slides[currentSlide].classList.remove('active');
        
        // 次のスライドのインデックスを計算
        const nextIndex = (currentSlide + 1) % slides.length;
        
        // 次のスライドを表示
        slides[nextIndex].style.transform = 'translateX(100%)';
        slides[nextIndex].classList.add('active');
        
        // 1フレーム後に実際のアニメーションを開始
        requestAnimationFrame(() => {
            slides[nextIndex].style.transform = '';
        });
        
        // 前のスライドをクリーンアップ
        const prevIndex = (currentSlide - 1 + slides.length) % slides.length;
        slides[prevIndex].classList.remove('prev');
        slides[prevIndex].style.transform = 'translateX(100%)';
        
        // 現在のスライドを更新
        currentSlide = nextIndex;
    }
    
    // 5秒ごとにスライド切り替え
    setInterval(nextSlide, 5000);
});
