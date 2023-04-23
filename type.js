

  document.querySelector("#send-button").addEventListener("click", myfun2);
 
  function myfun2(){
    var x = document.querySelector("#message-input").value;
    console.log(x);
    document.querySelector(".p2").textContent = x ; 
    document.querySelector(".p1").textContent = x ; 
    document.querySelector("#message-input").value = " "
  }


