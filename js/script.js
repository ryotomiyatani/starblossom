
$(function() {
  switch_img();
});

/**
 * 一定時間ごとに画像を切り替える
 * @param {number} time - 画像切り替えの待ち時間
 */
function switch_img(time) {
    var target = $('.js-switch-img');
    var current = 'is-current';
    var wait = time || 8000;
 
    setTimeout(function() {
        for (var i = 0; i < target.length; i++) {
            $wrapper = target.eq(i);
            // 最後の画像以外は次の要素にカレントクラスを移動
            if($wrapper.children('.' + current).index() < $wrapper.children().length - 1) {
                $wrapper.children('.' + current).removeClass(current)
                    .next().addClass(current);
            // 最後の画像の場合は先頭要素にカレントクラスを移動
            } else {
                $wrapper.children('.' + current).removeClass(current);
                $wrapper.children().eq(0).addClass(current);
            }
        }
        switch_img(wait);
    }, wait);
}


$('.menu-trigger').on('click',function(){
  if($(this).hasClass('active')){
    $(this).removeClass('active');
    $('nav').removeClass('open');
    $('.overlay').removeClass('open');
  } else {
    $(this).addClass('active');
    $('nav').addClass('open');
    $('.overlay').addClass('open');
  }
});
$('.overlay').on('click',function(){
  if($(this).hasClass('open')){
    $(this).removeClass('open');
    $('.menu-trigger').removeClass('active');
    $('nav').removeClass('open');      
  }
});
