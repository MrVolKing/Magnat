
var top1 = document.getElementById('top1');
var top2 = document.getElementById('top2');
var top3 = document.getElementById('top3');
var top4 = document.getElementById('top4');
var top5 = document.getElementById('top5');
var top6 = document.getElementById('top6');
var bottom1 = document.getElementById('bottom1');
var bottom2 = document.getElementById('bottom2');
var bottom3 = document.getElementById('bottom3');
var bottom4 = document.getElementById('bottom4');
var bottom5 = document.getElementById('bottom5');
var bottom6 = document.getElementById('bottom6');
var plus1 = document.getElementById('imgplus1');
var minus1 = document.getElementById('imgminus1');

top1.addEventListener('click', function () {
    bottom1.classList.toggle('hidden');
    bottom2.classList.add('hidden');
    bottom3.classList.add('hidden');
    bottom4.classList.add('hidden');
    bottom5.classList.add('hidden');
    bottom6.classList.add('hidden');
});

top2.addEventListener('click', function () {
    bottom2.classList.toggle('hidden');
    bottom1.classList.add('hidden');
    bottom3.classList.add('hidden');
    bottom4.classList.add('hidden');
    bottom5.classList.add('hidden');
    bottom6.classList.add('hidden');
});

top3.addEventListener('click', function () {
    bottom3.classList.toggle('hidden');
    bottom2.classList.add('hidden');
    bottom1.classList.add('hidden');
    bottom4.classList.add('hidden');
    bottom5.classList.add('hidden');
    bottom6.classList.add('hidden');
});

top4.addEventListener('click', function () {
    bottom4.classList.toggle('hidden');
    bottom2.classList.add('hidden');
    bottom3.classList.add('hidden');
    bottom1.classList.add('hidden');
    bottom5.classList.add('hidden');
    bottom6.classList.add('hidden');
});

top5.addEventListener('click', function () {
    bottom5.classList.toggle('hidden');
    bottom2.classList.add('hidden');
    bottom3.classList.add('hidden');
    bottom4.classList.add('hidden');
    bottom1.classList.add('hidden');
    bottom6.classList.add('hidden');
});

top6.addEventListener('click', function () {
    bottom6.classList.toggle('hidden');
    bottom2.classList.add('hidden');
    bottom3.classList.add('hidden');
    bottom4.classList.add('hidden');
    bottom5.classList.add('hidden');
    bottom1.classList.add('hidden');
});



                                                                    // включение меню бургером

// var btnadapt  = document.getElementById('btnadapt'); 
// var close = document.getElementById('close');
// var adaptmenu = document.getElementById('adaptmenu');

// btnadapt.addEventListener('click', function () {
//     adaptmenu.classList.add('visibladaptmenu');
// });
