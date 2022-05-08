function GAScontact(){
  fetch(
      "https://script.google.com/macros/s/AKfycbzYLynt5VvjsU3QUq3ZAY1_GbTQfvgoDxALNGF0acE1GpddWWiuz9c3pKIp2ZGRwkpFOA/exec",
      {
        method: "GET"
      }
    )
    .then(response => {
      return response.json();
    })
      // データを取得した場合
    .then(function(data) {
      var ahaha = document.getElementById("gaschange");
      test(data);
    })
    // サーバーがエラーを返した場合
    .catch(function(error) {
      console.log(error);
    });
  }
  
  function test(ahaha){
    var aha = document.getElementById("gaschange");
    var inputvalue= document.getElementById("forvalue");
    if(aha.getAttribute("name")=="0"){
      //回答されている数(使わない回答)
      aha.setAttribute("name",Object.keys(ahaha).length);
    }
    animation(ahaha);
  }
  
  function animation(emoji){

    //@----アニメーションされる個数を計算----

    //シートにある絵文字(回答された)の数
    var emoji_length = Object.keys(emoji).length; 
    //表示された絵文字の数
    var emoji_used = Number(document.getElementById("gaschange").getAttribute("name")); 
    //まだ表示されていない絵文字の数
    var emoji_indicate = emoji_length - emoji_used; 
    //新しい要素用変数
    var emoji_element;
    //@----表示されてない分ループする----
    for(var i = 1;i<=emoji_indicate;i++){
      //----@要素を作成----

      //新しい要素をdiv要素に指定
      emoji_element = document.createElement("div");
      //新しい要素のidをその顔文字の行数目のidにする
      emoji_element.id = "emoji"+String(emoji_length+i-1);
      //要素を追加
      document.getElementById("gaschange").appendChild(emoji_element);
      //要素の文字をその顔文字に指定
      document.getElementById("emoji"+String(emoji_length+i-1)).innerHTML=emoji[emoji_used+i-1];
      //クラスを追加
      document.getElementById("emoji"+String(emoji_length+i-1)).classList.add("emojianimation");
      //アニメーションの初期位置(今回は画面下に設定)
      document.getElementById("emoji"+String(emoji_length+i-1)).style.top=document.body.clientHeight+220;
      //ランダムに横の座標を決める
      document.getElementById("emoji"+String(emoji_length+i-1)).style.left=Math.floor( Math.random() * (document.body.clientWidth-220) );
      //5秒間でだんだん加速しながら下側から上側に行きその後固定される
      document.getElementById("emoji"+String(emoji_length+i-1)).animate(
        {
          top:0
        },
        {
          duration : 5000,
          delay : Math.floor(Math.random() * 1000)+1,
          easing : "ease-in",
          fill : "forwards"
        }
      );
      
  }
  //どこの行までアニメーションをしたかを記す
  document.getElementById("gaschange").setAttribute("name",emoji_used + emoji_indicate);
}

//1秒間毎にGASとfetchして、もし表示されていないのがあったら表示する
setInterval(GAScontact,1000);


//ここから下はipadやスマホでもスクロールできないようにするためにある
function disableScroll(event) {
  event.preventDefault();
}
document.addEventListener('touchmove', disableScroll, { passive: false });
