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
        // 現在のスライドをフェードアウト
        slides[currentSlide].classList.remove('active');
        
        // 次のスライドのインデックスを計算
        currentSlide = (currentSlide + 1) % slides.length;
        
        // 次のスライドをフェードイン
        slides[currentSlide].classList.add('active');
    }, 5000); // 5秒ごとに切り替え
}

// DOMの読み込み完了後に実行
document.addEventListener('DOMContentLoaded', function() {
    slideShow();
});
