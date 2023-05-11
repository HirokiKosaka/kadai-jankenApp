$('.li1').on('click', function(){
     let view = '<img src="./images/ironman.jpeg" width="250" height="350">'
     $('#mainImg').html(view);
     $('.character').html(view);
});

$('.li2').on('click', function(){
     let view = '<img src="./images/captain.jpeg" width="250" height="350">'
     $('#mainImg').html(view);
     $('.character').html(view);
});

$('.li3').on('click', function(){
     let view = '<img src="./images/thor.jpeg" width="250" height="350">'
     $('#mainImg').html(view);
     $('.character').html(view);
});

$('.li4').on('click', function(){
     let view = '<img src="./images/hulk.jpeg" width="250" height="350">'
     $('#mainImg').html(view);
     $('.character').html(view);
});

$('.li5').on('click', function(){
     let view = '<img src="./images/hawkeye.jpeg" width="250" height="350">'
     $('#mainImg').html(view);
     $('.character').html(view);
});

$('.li6').on('click', function(){
     let view = '<img src="./images/blackwidow.jpeg" width="250" height="350">'
     $('#mainImg').html(view);
     $('.character').html(view);
});

$('.li7').on('click', function(){
     let view = '<img src="./images/blackpanther.jpeg" width="250" height="350">'
     $('#mainImg').html(view);
     $('.character').html(view);
});

$('.li8').on('click', function(){
     let view = '<img src="./images/spiderman.jpeg" width="250" height="350">'
     $('#mainImg').html(view);
     $('.character').html(view);
});

$('.li9').on('click', function(){
     let view = '<img src="./images/dr strange.jpeg" width="250" height="350">'
     $('#mainImg').html(view);
     $('.character').html(view);
});

$('.li10').on('click', function(){
     let view = '<img src="./images/wanda.jpeg" width="250" height="350">'
     $('#mainImg').html(view);
     $('.character').html(view);
});

$('.li11').on('click', function(){
     let view = '<img src="./images/vision.jpeg" width="250" height="350">'
     $('#mainImg').html(view);
     $('.character').html(view);
});

$('.li12').on('click', function(){
     let view = '<img src="./images/antmanandwasp.jpeg" width="250" height="350">'
     $('#mainImg').html(view);
     $('.character').html(view);
});

$('.li13').on('click', function(){
     let view = '<img src="./images/guardians.jpeg" width="250" height="350">'
     $('#mainImg').html(view);
     $('.character').html(view);
});

$('.li14').on('click', function(){
     let view = '<img src="./images/captainmarvel.jpeg" width="250" height="350">'
     $('#mainImg').html(view);
     $('.character').html(view);
});

$('.li15').on('click', function(){
     let view = '<img src="./images/falcon.jpeg" width="250" height="350">'
     $('#mainImg').html(view);
     $('.character').html(view);
});

$('.li16').on('click', function(){
     let view = '<img src="./images/wintersoldier.jpeg" width="250" height="350">'
     $('#mainImg').html(view);
     $('.character').html(view);
});

$('.go_btn').on('click', function(){
     alert('Are You Ready?');
})

$(function() {
    $(".go_btn").click(function() {
        $(".battle_container").slideToggle("");
    });
});




var playerHP = 10; // プレイヤーの初期HP
		var computerHP = 10; // コンピューターの初期HP

		// HPをゲージに反映する関数
		function updateGauge(element, value) {
			var percentage = value * 10; // HPを10倍した値をパーセンテージに変換
			element.style.width = percentage + '%';
			if (value <=3) {
				element.style.backgroundColor = 'red'; // HPが3以下になったら赤くする
			} else {
				element.style.backgroundColor = 'white';
			}
		}

		function play(playerChoice) {
			var computerChoice = Math.floor(Math.random() * 3); // 0〜2の乱数を生成
			var choices = ["rock", "paper", "scissors"];

			// プレイヤーとコンピューターの選択を比較
			if (playerChoice == choices[computerChoice]) {
				$('.logs').html("あいこです。");
			} else if (playerChoice == "rock" && computerChoice == 2 || 
						playerChoice == "paper" && computerChoice == 0 ||
						playerChoice == "scissors" && computerChoice == 1) {
                    $('.logs').html("勝ちました！");
                    $('.t_gauge').css('background-color', 'black');
				computerHP--;
				updateGauge(document.getElementById("computer-gauge"), computerHP);
			} else {
				$('.logs').html("負けました...");
                    $('.my_gauge').css('background-color', 'black');
				playerHP--;
				updateGauge(document.getElementById("player-gauge"), playerHP);
			}

			// HPが0になった
               if (playerHP == 0) {
                    $('.my_gauge').css('background-color', 'black');
                    alert('You lose!');
			} else if(computerHP == 0) {
                    $('.t_gauge').css('background-color', 'black');
                    alert('You win!');
               }};