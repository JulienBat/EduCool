function Personnage(theImage,indices){
  this.image = theImage;
  this.listeIndice = indices;
}

function main(){
  var listeImage = chargementImage();
  var numATrouver = selectionElement(listeImage);

  var val = document.getElementById("btn_validate");
  val.addEventListener("click", function() {
      validate(numATrouver);
  }, false);

  ajoutOpacite(listeImage);
  ajoutChgIndice();

  var indice51 = "That isn't a man";
  var indice52 = "That isn't a woman";
  var indice53 = "He doesn't have a beard";
  var indice54 = "He doesn't have a moustache";
  var indice55 = "He doesn't a big nose";
  var indice56 = "She doesn't a big nose";
  var indice57 = "He doesn't have glasses";
  var indice58 = "She doesn't have glasses";
  var indice59 = "He doesn't have blue eyes";
  var indice60 = "He doesn't have brown eyes";
  var indice61 = "She doesn't have blue eyes";
  var indice62 = "She doesn't have brown eyes";
  var indice63 = "He doesn't have big eyebrow";
  var indice64 = "He isn't bald";
  var indice65 = "He doesn't have curly hair";
  var indice66 = "She doesn't have curly hair";
  var indice67 = "He hasn't straight hair";
  var indice68 = "She doesn't have straight hair";
  var indice69 = "He doesn't have white hair";
  var indice70 = "She doesn't have white hair";
  var indice71 = "He doesn't have black hair";
  var indice72 = "She doesn't have black hair";
  var indice73 = "He doesn't have blond hair";
  var indice74 = "She doesn't have blond hair";
  var indice75 = "He doesn't have red hair";
  var indice76 = "She doesn't have red hair";
  var indice77 = "He doesn't have brown hair";
  var indice78 = "She doesn't have brown hair";
  var indice79 = "He doesn't have a cap";
  var indice80 = "She doesn't have a cap";
  var indice81 = "She doesn't have a hat";
  var indice82 = "He doesn't have a beret";
  var indice83 = "She doesn't have a beret";

  var listePersonnage = creationListePerso(listeImage,tabIndice);
  listeIndices = listePersonnage[numATrouver].listeIndice;

  initialiseBoutonIndice(listeIndices[0]);
}

function initialiseBoutonIndice(indice){
  document.getElementById("ind_prec").style.opacity = 0.5;
  document.getElementById("ind_suiv").style.opacity = 1;
  document.getElementById("ind").innerHTML = indice;
}

function chgTexteIndice(listeIndices,num){
  document.getElementById("ind").innerHTML = listeIndices[num];
}

function creationListePerso(listeImage,tabIndice){
    var listePersonnage = new Array(listeImage.length);
    var listeIndiceParPerso = new Array();
    for (var i=0;i<listeImage.length;i++){
      switch(i){
        case 0:
          listeIndiceParPerso.push(tabIndice[33]);
          listeIndiceParPerso.push(tabIndice[38]);
          listeIndiceParPerso.push(tabIndice[44]);
          listeIndiceParPerso.push(tabIndice[50]);
          listeIndiceParPerso.push(tabIndice[54]);
          listeIndiceParPerso.push(tabIndice[56]);
          listeIndiceParPerso.push(tabIndice[58]);
          listeIndiceParPerso.push(tabIndice[60]);
          listeIndiceParPerso.push(tabIndice[62]);
          listeIndiceParPerso.push(tabIndice[63]);
          listeIndiceParPerso.push(tabIndice[65]);
        case 1:
          listeIndiceParPerso.push(tabIndice[34]);
          listeIndiceParPerso.push(tabIndice[37]);
          listeIndiceParPerso.push(tabIndice[39]);
          listeIndiceParPerso.push(tabIndice[41]);
          listeIndiceParPerso.push(tabIndice[45]);
          listeIndiceParPerso.push(tabIndice[61]);
          listeIndiceParPerso.push(tabIndice[64]);
        case 2:
          listeIndiceParPerso.push(tabIndice[34]);
          listeIndiceParPerso.push(tabIndice[36]);
          listeIndiceParPerso.push(tabIndice[37]);
          listeIndiceParPerso.push(tabIndice[41]);
          listeIndiceParPerso.push(tabIndice[45]);
          listeIndiceParPerso.push(tabIndice[46]);
          listeIndiceParPerso.push(tabIndice[47]);
          listeIndiceParPerso.push(tabIndice[53]);
          listeIndiceParPerso.push(tabIndice[55]);
          listeIndiceParPerso.push(tabIndice[57]);
          listeIndiceParPerso.push(tabIndice[59]);
          listeIndiceParPerso.push(tabIndice[61]);
          listeIndiceParPerso.push(tabIndice[64]);
        case 3:
          listeIndiceParPerso.push(tabIndice[34]);
          listeIndiceParPerso.push(tabIndice[35]);
          listeIndiceParPerso.push(tabIndice[36]);
          listeIndiceParPerso.push(tabIndice[39]);
          listeIndiceParPerso.push(tabIndice[41]);
          listeIndiceParPerso.push(tabIndice[45]);
          listeIndiceParPerso.push(tabIndice[46]);
          listeIndiceParPerso.push(tabIndice[51]);
          listeIndiceParPerso.push(tabIndice[55]);
          listeIndiceParPerso.push(tabIndice[57]);
          listeIndiceParPerso.push(tabIndice[59]);
          listeIndiceParPerso.push(tabIndice[64]);
        case 4:
          listeIndiceParPerso.push(tabIndice[34]);
          listeIndiceParPerso.push(tabIndice[36]);
          listeIndiceParPerso.push(tabIndice[37]);
          listeIndiceParPerso.push(tabIndice[39]);
          listeIndiceParPerso.push(tabIndice[41]);
          listeIndiceParPerso.push(tabIndice[46]);
          listeIndiceParPerso.push(tabIndice[49]);
          listeIndiceParPerso.push(tabIndice[51]);
          listeIndiceParPerso.push(tabIndice[55]);
          listeIndiceParPerso.push(tabIndice[57]);
          listeIndiceParPerso.push(tabIndice[59]);
          listeIndiceParPerso.push(tabIndice[61]);
          listeIndiceParPerso.push(tabIndice[64]);
        case 5:
          listeIndiceParPerso.push(tabIndice[34]);
          listeIndiceParPerso.push(tabIndice[36]);
          listeIndiceParPerso.push(tabIndice[37]);
          listeIndiceParPerso.push(tabIndice[39]);
          listeIndiceParPerso.push(tabIndice[41]);
          listeIndiceParPerso.push(tabIndice[61]);
          listeIndiceParPerso.push(tabIndice[64]);
        case 6:
          listeIndiceParPerso.push(tabIndice[34]);
          listeIndiceParPerso.push(tabIndice[35]);
          listeIndiceParPerso.push(tabIndice[36]);
          listeIndiceParPerso.push(tabIndice[37]);
          listeIndiceParPerso.push(tabIndice[39]);
          listeIndiceParPerso.push(tabIndice[42]);
          listeIndiceParPerso.push(tabIndice[45]);
          listeIndiceParPerso.push(tabIndice[46]);
          listeIndiceParPerso.push(tabIndice[47]);
          listeIndiceParPerso.push(tabIndice[51]);
          listeIndiceParPerso.push(tabIndice[53]);
          listeIndiceParPerso.push(tabIndice[57]);
          listeIndiceParPerso.push(tabIndice[59]);
          listeIndiceParPerso.push(tabIndice[61]);
          listeIndiceParPerso.push(tabIndice[64]);
        case 7:
          listeIndiceParPerso.push(tabIndice[34]);
          listeIndiceParPerso.push(tabIndice[35]);
          listeIndiceParPerso.push(tabIndice[36]);
          listeIndiceParPerso.push(tabIndice[39]);
          listeIndiceParPerso.push(tabIndice[41]);
          listeIndiceParPerso.push(tabIndice[61]);
          listeIndiceParPerso.push(tabIndice[64]);
        case 8:
          listeIndiceParPerso.push(tabIndice[34]);
          listeIndiceParPerso.push(tabIndice[35]);
          listeIndiceParPerso.push(tabIndice[37]);
          listeIndiceParPerso.push(tabIndice[39]);
          listeIndiceParPerso.push(tabIndice[41]);
          listeIndiceParPerso.push(tabIndice[45]);
          listeIndiceParPerso.push(tabIndice[46]);
          listeIndiceParPerso.push(tabIndice[47]);
          listeIndiceParPerso.push(tabIndice[51]);
          listeIndiceParPerso.push(tabIndice[53]);
          listeIndiceParPerso.push(tabIndice[57]);
          listeIndiceParPerso.push(tabIndice[59]);
          listeIndiceParPerso.push(tabIndice[61]);
          listeIndiceParPerso.push(tabIndice[64]);
        case 9:
          listeIndiceParPerso.push(tabIndice[34]);
          listeIndiceParPerso.push(tabIndice[35]);
          listeIndiceParPerso.push(tabIndice[36]);
          listeIndiceParPerso.push(tabIndice[39]);
          listeIndiceParPerso.push(tabIndice[41]);
          listeIndiceParPerso.push(tabIndice[46]);
          listeIndiceParPerso.push(tabIndice[47]);
          listeIndiceParPerso.push(tabIndice[51]);
          listeIndiceParPerso.push(tabIndice[53]);
          listeIndiceParPerso.push(tabIndice[55]);
          listeIndiceParPerso.push(tabIndice[57]);
          listeIndiceParPerso.push(tabIndice[64]);
        case 10:
          listeIndiceParPerso.push(tabIndice[34]);
          listeIndiceParPerso.push(tabIndice[35]);
          listeIndiceParPerso.push(tabIndice[36]);
          listeIndiceParPerso.push(tabIndice[37]);
          listeIndiceParPerso.push(tabIndice[61]);
          listeIndiceParPerso.push(tabIndice[42]);
          listeIndiceParPerso.push(tabIndice[45]);
          listeIndiceParPerso.push(tabIndice[61]);
          listeIndiceParPerso.push(tabIndice[64]);
        case 11:
          listeIndiceParPerso.push(tabIndice[33]);
          listeIndiceParPerso.push(tabIndice[38]);
          listeIndiceParPerso.push(tabIndice[61]);
          listeIndiceParPerso.push(tabIndice[40]);
          listeIndiceParPerso.push(tabIndice[60]);
          listeIndiceParPerso.push(tabIndice[43]);
          listeIndiceParPerso.push(tabIndice[48]);
          listeIndiceParPerso.push(tabIndice[52]);
          listeIndiceParPerso.push(tabIndice[54]);
          listeIndiceParPerso.push(tabIndice[56]);
          listeIndiceParPerso.push(tabIndice[58]);
          listeIndiceParPerso.push(tabIndice[60]);
          listeIndiceParPerso.push(tabIndice[62]);
          listeIndiceParPerso.push(tabIndice[63]);
          listeIndiceParPerso.push(tabIndice[65]);

      }
      listePersonnage[i] = new Personnage(listeImage[i],listeIndiceParPerso);
      listeIndiceParPerso = new Array();
    }
    return listePersonnage;
}

function chargementImage(){
  var listeImage = new Array();
  for (var i = 1; i<25 ;i++){
    listeImage.push(document.getElementById('p'+i));
    tabImageSelec[i-1] = false;
  }
  return listeImage;
}

function chgTabImagesSelectionnees(imageId,boolean){
  var idNum = imageId[1] + (imageId.length==2? null : imageId[2]);
  var num = parseInt(idNum);
  tabImageSelec[num-1] = boolean;
}

function ajoutChgIndice(){
  document.getElementById("ind_suiv").addEventListener("click",function(){
    document.getElementById("ind_prec").style.opacity = 1;

    if (0 <= numActuel && numActuel < listeIndices.length-1){
      numActuel++;
      chgTexteIndice(listeIndices,numActuel);
      this.style.opacity = 1;
    }
    if (numActuel < 0 || numActuel >= listeIndices.length-2){
      this.style.opacity = 0.5;
    }


  }, false);

  document.getElementById("ind_prec").addEventListener("click",function(){
    document.getElementById("ind_suiv").style.opacity = 1;

    if (1 <= numActuel && numActuel < listeIndices.length){
      numActuel--;
      chgTexteIndice(listeIndices,numActuel);
      this.style.opacity = 1;
    }
    if (numActuel < 1 || numActuel >= listeIndices.length-1){
      this.style.opacity = 0.5;
    }

  }, false);

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
  return 1;// num;
}

function validate(numATrouver){
  var compt = 0;
  var res = 0;
  for (var i = 0; i<24 ; i++){
    compt += tabImageSelec[i]==true ? 0 : 1;
    res += tabImageSelec[i]==false ? i : 0;
  }
  if (compt > 1){
    alert("There still some choises\nIl vous reste des choix");
  }
  else if (compt < 1) {
    alert("You must at least leave one!\nVous devez en laisser au moins un!");
  }
  else{
    alert("Are you sure\nEtes vous sûr?");
    victoireDefaite(numATrouver,res);
  }
}

function victoireDefaite(choix, bon){
  if (choix==bon){
    alert("Victoire");
    window.location.replace("file:///home/blackstar/Documents/Telecom/2A/Projets/anglais/EduCool/menu.html")
  }
  else{
    alert("loose\ndefaite");
  }
}

var tabImageSelec = new Array(25);
var numActuel = 0;
var listeIndices;

main();
