$(function () {

  //ページ内スクロール
  var navHeight = $(".header").outerHeight();

  $('a[href^="#"]').on("click", function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top - navHeight;
    $("html, body").animate({ scrollTop: position, }, 300, "swing");
    return false;
  });

  //ページトップ
  $("#js-page-top").on("click", function () {
    $("body,html").animate({ scrollTop: 0, }, 300);
    return false;
  });

});


  function slideAnime(){
    //====左に動くアニメーションここから===
      $('.leftAnime').each(function(){ 
        var elemPos = $(this).offset().top-50;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight){
          //左から右へ表示するクラスを付与
          //テキスト要素を挟む親要素（左側）とテキスト要素を元位置でアニメーションをおこなう
          $(this).addClass("slideAnimeLeftRight"); //要素を左枠外にへ移動しCSSアニメーションで左から元の位置に移動
          $(this).children(".leftAnimeInner").addClass("slideAnimeRightLeft");  //子要素は親要素のアニメーションに影響されないように逆の指定をし元の位置をキープするアニメーションをおこなう
        }else{
          //左から右へ表示するクラスを取り除く
          $(this).removeClass("slideAnimeLeftRight");
          $(this).children(".leftAnimeInner").removeClass("slideAnimeRightLeft");
          
        }
      });
      
    }
    
  
  
    // 画面が読み込まれたらすぐに動かしたい場合の記述
    $(window).on('load', function(){
      slideAnime();/* アニメーション用の関数を呼ぶ*/
    });// ここまで画面が読み込まれたらすぐに動かしたい場合の記述



