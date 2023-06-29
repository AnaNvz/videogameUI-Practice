window.addEventListener("keydown", function(event) {
    if (event.code == 'KeyZ') 
    {
        var anim1 = document.querySelectorAll(".rewards");
        anim1.forEach((anim1) => {
            anim1.classList.remove("animationRewardAnimation");
          });
        setTimeout(AddClass, 1000);
    }
  });

function AddClass()
{
    var anim1 = document.querySelectorAll(".rewards");
    anim1.forEach((anim1) => {
        anim1.classList.add("animationRewardAnimation")
      });
    
}
  
window.addEventListener("keydown", function(event) {
    switch(event.code){
        case 'KeyX':
            var anim2 = document.querySelector("#lifeBar");
            
            //setTimeout(MoveBarTo0, 1000);
            var anim3 = document.querySelector("#shieldBar");  
            setTimeout(RemoveAll, 1000);
            break;
        case 'KeyC':
            var anim2 = document.querySelector("#lifeBar");
            anim2.classList.add("lifeBar20")
            var anim3 = document.querySelector("#shieldBar");
            anim3.classList.add("shieldBar20");
            setTimeout(RemoveClass0, 1000);
            break;
        case 'KeyV':
            var anim2 = document.querySelector("#lifeBar");
            anim2.classList.add("lifeBar50")
            var anim3 = document.querySelector("#shieldBar");
            anim3.classList.add("shieldBar50");
            setTimeout(RemoveClass20, 1000);
            break;
        case 'KeyB':
            var anim2 = document.querySelector("#lifeBar");
            anim2.classList.add("lifeBar70")
            var anim3 = document.querySelector("#shieldBar");
            anim3.classList.add("shieldBar70");
            setTimeout(RemoveClass50, 1000);
            break;
        case 'KeyN':
            var anim2 = document.querySelector("#lifeBar");
            anim2.classList.add("lifeBar100")
            var anim3 = document.querySelector("#shieldBar");
            anim3.classList.add("shieldBar100");
            setTimeout(RemoveClass70, 1000);
            break;
    }
  });

function RemoveAll(){
    var anim3 = document.querySelector("#shieldBar");
    anim3.classList.add("shieldBar0")
    anim3.classList.remove("shieldBar20");
    anim3.classList.remove("shieldBar50");
    anim3.classList.remove("shieldBar70");
    anim3.classList.remove("shieldBar100");

    var anim2 = document.querySelector("#lifeBar");
    anim2.classList.add("lifeBar0")
    anim2.classList.remove("lifeBar20");
    anim2.classList.remove("lifeBar50");
    anim2.classList.remove("lifeBar70");
    anim2.classList.remove("lifeBar100");
}

  function MoveBarTo0()
{
    var anim3 = document.querySelector("#shieldBar");
    anim3.classList.add("shieldBar0")
    var anim2 = document.querySelector("#lifeBar");
    anim2.classList.add("lifeBar0")
}

function RemoveClass0()
{
    var anim3 = document.querySelector("#shieldBar");
    anim3.classList.remove("shieldBar0");
    anim3.classList.remove("shieldBar50");
    anim3.classList.remove("shieldBar70");
    anim3.classList.remove("shieldBar100");
    var anim2 = document.querySelector("#lifeBar");
    anim2.classList.remove("lifeBar0");
    anim2.classList.remove("lifeBar50");
    anim2.classList.remove("lifeBar70");
    anim2.classList.remove("lifeBar100");

}

function RemoveClass20(){
    var anim3 = document.querySelector("#shieldBar");
    anim3.classList.remove("shieldBar0");
    anim3.classList.remove("shieldBar20")
    anim3.classList.remove("shieldBar70");
    anim3.classList.remove("shieldBar100");
    var anim2 = document.querySelector("#lifeBar");
    anim2.classList.remove("lifeBar0");
    anim2.classList.remove("lifeBar20");
    anim2.classList.remove("lifeBar70");
    anim2.classList.remove("lifeBar100");
}

function RemoveClass50(){
    var anim3 = document.querySelector("#shieldBar");
    anim3.classList.remove("shieldBar0");
    anim3.classList.remove("shieldBar50");
    anim3.classList.remove("shieldBar20");
    anim3.classList.remove("shieldBar100");
    var anim2 = document.querySelector("#lifeBar");
    anim2.classList.remove("lifeBar0");
    anim2.classList.remove("lifeBar20");
    anim2.classList.remove("lifeBar50");
    anim2.classList.remove("lifeBar100");
}

function RemoveClass70(){
    var anim3 = document.querySelector("#shieldBar");
    anim3.classList.remove("shieldBar70");
    anim3.classList.remove("shieldBar0");
    anim3.classList.remove("shieldBar50");
    anim3.classList.remove("shieldBar20");
    var anim2 = document.querySelector("#lifeBar");
    anim2.classList.remove("lifeBar70");
    anim2.classList.remove("lifeBar0");
    anim2.classList.remove("lifeBar20");
    anim2.classList.remove("lifeBar50");
}

