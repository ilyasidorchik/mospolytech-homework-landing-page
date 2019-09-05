$(document).ready(function() {
	$('.slideshow').cycle({
		fx: 'fade'
	});
});
window.onload = function() {
	let images = document.querySelectorAll('.content img');
	Array.prototype.forEach.call(images, function(el) {
		el.addEventListener("click", function(event) {
			document.getElementById("imger").style.display = "block";
			if (el.getAttribute('src') == 'img/5.jpg') document.querySelectorAll('#imger .layout-positioner img')[0].style.display = "block";
			if (el.getAttribute('src') == 'img/6.jpg') document.querySelectorAll('#imger .layout-positioner img')[1].style.display = "block";
			if (el.getAttribute('src') == 'img/7.jpg') document.querySelectorAll('#imger .layout-positioner img')[2].style.display = "block";
			if (el.getAttribute('src') == 'img/8.jpg') document.querySelectorAll('#imger .layout-positioner img')[3].style.display = "block";
			if (el.getAttribute('src') == 'img/9.jpg') document.querySelectorAll('#imger .layout-positioner img')[4].style.display = "block";
			if (el.getAttribute('src') == 'img/map.jpg') document.querySelectorAll('#imger .layout-positioner img')[5].style.display = "block";
			if (el.getAttribute('src') == 'img/10.jpg') document.querySelectorAll('#imger .layout-positioner img')[6].style.display = "block";
			if (el.getAttribute('src') == 'img/11.jpg') document.querySelectorAll('#imger .layout-positioner img')[7].style.display = "block";
			if (el.getAttribute('src') == 'img/12.jpg') document.querySelectorAll('#imger .layout-positioner img')[8].style.display = "block";
			if (el.getAttribute('src') == 'img/13.jpg') document.querySelectorAll('#imger .layout-positioner img')[9].style.display = "block";
		});
	});
	let imgs = document.querySelectorAll('#imger .layout-positioner img');
	Array.prototype.forEach.call(imgs, function(el) {
		el.addEventListener("click", function(event) {
			document.getElementById("imger").style.display = "none";
			if (el.getAttribute('src') == 'img/5.jpg') document.querySelectorAll('#imger .layout-positioner img')[0].style.display = "none";
			if (el.getAttribute('src') == 'img/6.jpg') document.querySelectorAll('#imger .layout-positioner img')[1].style.display = "none";
			if (el.getAttribute('src') == 'img/7.jpg') document.querySelectorAll('#imger .layout-positioner img')[2].style.display = "none";
			if (el.getAttribute('src') == 'img/8.jpg') document.querySelectorAll('#imger .layout-positioner img')[3].style.display = "none";
			if (el.getAttribute('src') == 'img/9.jpg') document.querySelectorAll('#imger .layout-positioner img')[4].style.display = "none";
			if (el.getAttribute('src') == 'img/map.jpg') document.querySelectorAll('#imger .layout-positioner img')[5].style.display = "none";
			if (el.getAttribute('src') == 'img/10.jpg') document.querySelectorAll('#imger .layout-positioner img')[6].style.display = "none";
			if (el.getAttribute('src') == 'img/11.jpg') document.querySelectorAll('#imger .layout-positioner img')[7].style.display = "none";
			if (el.getAttribute('src') == 'img/12.jpg') document.querySelectorAll('#imger .layout-positioner img')[8].style.display = "none";
			if (el.getAttribute('src') == 'img/13.jpg') document.querySelectorAll('#imger .layout-positioner img')[9].style.display = "none";
		});
	});
}
$(document).ready(function() {
	$("a.scrollto").click(function() {
		elementClick = $(this).attr("href")
		destination = $(elementClick).offset().top;
		$("html,body").stop().animate({
			scrollTop: destination - 75
		}, 1100);
		return false;
	});
});

function telfocus() {
	var tel = document.getElementById("callback_tel");
	tel.focus();
}

function bagfix() {
	document.getElementById("imger").style.display = 'none';
}