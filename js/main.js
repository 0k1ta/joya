// ページが読み込まれたら実行
window.onload = ()=>{

     // オブジェクトと変数の準備
     var count_disp = document.getElementById("disp_count");  
     var kane = document.getElementById("kane");
     var reset_btn = document.getElementById("btn_reset");
     var count_value = 108;

     // 除夜の鐘のクリック処理
     kane.onclick = ()=>{
          count_value -= 1;
          count_disp.innerHTML = count_value;
          if(count_disp.innerHTML <= 0){
            count_disp.innerHTML = "煩悩退散!"
          }
     };
     // 除夜の鐘のマウスダウン処理
     kane.onmousedown = ()=>{
          kane.style.backgroundColor = "#00FF00";
     }
     // 除夜の鐘のマウスアップ処理
     kane.onmouseup = ()=>{
          kane.style.backgroundColor = "";
     }
     // リセットボタンのクリック処理
     reset_btn.onclick = ()=>{
          count_value = 108; count_disp.innerHTML = count_value;
     }
     // リセットボタンのマウスダウン処理
     reset_btn.onmousedown = ()=>{
          reset_btn.style.backgroundColor = "#00FF00";
     }
     // リセットボタンのマウスアップ処理
     reset_btn.onmouseup = ()=>{
          reset_btn.style.backgroundColor = "";
     }
};
