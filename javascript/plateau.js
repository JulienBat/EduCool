function main(){
  var p = chargementImage();
  var numATrouver = selectionElement(p);

  var val = document.getElementById("btn_validate");
  val.addEventListener("click", function() {
      validate(numATrouver);
  }, false);

  ajoutOpacite(p);

}

function chargementImage(){
  var p = new Array();
  for (var i = 1; i<25 ;i++){
    p.push(document.getElementById('p'+i));
    tabImageSelec[i-1] = false;
  }
  return p;
}

function chgTabImagesSelectionnees(imageId,boolean){
  var idNum = imageId[1] + (imageId.length==2? null : imageId[2]);
  var num = parseInt(idNum);
  tabImageSelec[num-1] = boolean;
}

function ajoutOpacite(p){
  for(var i = 0; i < 24; i++){
      p[i].style.opacity = "1";
      p[i].addEventListener("click", function() {
          if(this.style.opacity == "1"){
              this.style.opacity = "0.5";
              chgTabImagesSelectionnees(this.id,true);
          }else{
              this.style.opacity = "1";
              chgTabImagesSelectionnees(this.id,false);
          }
      }, false);
  }

  return p;
}

function selectionElement(tabElements){
  var n = tabElements.length;
  var num = Math.floor(Math.random() * n);
  return  1;//num;
}

function validate(numATrouver){
  var compt = 0;
  var res = 0;
  for (var i = 0; i<24 ; i++){
    compt += tabImageSelec[i]==true ? 0 : 1;
    res += tabImageSelec[i]==false ? i : 0;
  }
  if (compt > 1){
    alert("Il vous reste un/des choix");
  }
  else if (compt < 1) {
    alert("Vous devez en laisser au moins un!");
  }
  else{
    alert("Etes vous sûr?");
    victoireDefaite(numATrouver,res);
  }
}

function victoireDefaite(choix, bon){
  if (choix==bon){
    alert("Victoire");
    window.location.replace("file:///home/blackstar/Documents/Telecom/2A/Projets/anglais/EduCool/menu.html")
  }
  else{
    alert("Defaite");
  }
}

function listeIndices(){
  var caracteristiques = ["blond","brun","barbe","lunettes"];

}

var tabImageSelec = new Array(25);

main();
