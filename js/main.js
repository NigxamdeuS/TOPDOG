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
    AOS.init({
        duration: 800,
        once: true
    });
});

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
			"random":false,//動きはランダムにしない
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