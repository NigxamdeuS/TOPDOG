// 初回ロード時のスクロール位置調整
document.addEventListener('DOMContentLoaded', function() {
    // スライドショーとAOSの初期化
    slideShow();
    AOS.init({
        duration: 800,
        once: true
    });

    // 全てのアンカーリンクに対してスクロール処理を追加
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = window.innerWidth <= 768 ? 80 : 100;
                const position = target.offsetTop - headerHeight;
                window.scrollTo({
                    top: position,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 初回ロード時にハッシュがある場合の処理
    if (location.hash) {
        setTimeout(function() {
            const target = document.querySelector(location.hash);
            if (target) {
                const headerHeight = window.innerWidth <= 768 ? 80 : 100;
                const position = target.offsetTop - headerHeight;
                window.scrollTo({
                    top: position,
                    behavior: 'smooth'
                });
            }
        }, 300);
    }
});

// ハンバーガーメニューの処理
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
    
    slides[0].classList.add('active');
    
    setInterval(() => {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }, 5000);
}

particlesJS("particles-js",{
	"particles":{
		"number":{
			"value":38,//この数値を変更すると幾何学模様の数が増減できる
			"density":{
				"enable":true,
				"value_area":800
			}
		},
		"color":{
			"value":"#2563EB"//色
		},
		"shape":{
			"type":"polygon",//形状はpolygonを指定
			"stroke":{
				"width":0,
			},
	"polygon":{
		"nb_sides":3//多角形の角の数
	},
	"image":{
		"width":190,
		"height":100
	}
	},
		"opacity":{
		"value":0.664994832269074,
		"random":false,
		"anim":{
			"enable":true,
			"speed":2.2722661797524872,
			"opacity_min":0.08115236356258881,
			"sync":false
		}
		},
		"size":{
			"value":3,
			"random":true,
			"anim":{
				"enable":false,
				"speed":40,
				"size_min":0.1,
				"sync":false
			}
		},
		"line_linked":{
			"enable":true,
			"distance":150,
			"color":"#1E3A8A",
			"opacity":0.6,
			"width":1
		},
		"move":{
			"enable":true,
			"speed":6,//この数値を小さくするとゆっくりな動きになる
			"direction":"none",//方向指定なし
			"random":false,//動はランダムにしない
			"straight":false,//動きをとどめない
			"out_mode":"out",//画面の外に出るように描写
			"bounce":false,//跳ね返りなし
			"attract":{
				"enable":false,
				"rotateX":600,
				"rotateY":961.4383117143238
			}
		}
	},
	"interactivity":{
		"detect_on":"canvas",
		"events":{
			"onhover":{
				"enable":false,
				"mode":"repulse"
			},
	"onclick":{
		"enable":false
	},
	"resize":true
		}
	},
	"retina_detect":true
});

//logoの表示
$(window).on('load',function(){
	$("#splash").delay(1500).fadeOut('slow');//ローディング画面を1.5秒（1500ms）待機してからフェードアウト
	$("#splash_logo").delay(1200).fadeOut('slow');//ロゴを1.2秒（1200ms）待機してからフェードアウト
  });