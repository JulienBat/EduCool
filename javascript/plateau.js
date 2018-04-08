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

  var indice1 = "That's a man";
  var indice2 = "That's a woman";
  var indice3 = "He has a beard";
  var indice4 = "He has a moustache";
  var indice5 = "He has a big nose";
  var indice6 = "She has a big nose";
  var indice7 = "He has glasses";
  var indice8 = "She has glasses";
  var indice9 = "He has blue eyes";
  var indice10 = "He has brown eyes";
  var indice11 = "She has blue eyes";
  var indice12 = "She has brown eyes";
  var indice13 = "He has big eyebrow";
  var indice14 = "He is bald";
  var indice15 = "He has curly hair";
  var indice16 = "She has curly hair";
  var indice17 = "He has straight hair";
  var indice18 = "She has straight hair";
  var indice19 = "He has white hair";
  var indice20 = "She has white hair";
  var indice21 = "He has black hair";
  var indice22 = "She has black hair";
  var indice23 = "He has blond hair";
  var indice24 = "She has blond hair";
  var indice25 = "He has red hair";
  var indice26 = "She has red hair";
  var indice27 = "He has brown hair";
  var indice28 = "She has brown hair";
  var indice29 = "He has a cap";
  var indice30 = "She has a cap";
  var indice31 = "She has a hat";
  var indice32 = "He has a beret";
  var indice33 = "She has a beret";
  var tabIndice = [indice1,indice2,indice3,indice4,indice5,indice6,indice7,indice8,indice9,indice10,indice11,indice12,indice13,indice14,indice15,indice16,indice17,indice18,indice19,indice20,indice21,indice22,indice23,indice24,indice25,indice26,indice27,indice28,indice29,indice30,indice31,indice32,indice33,indice51,indice52,indice53,indice54,indice55,indice56,indice57,indice58,indice59,indice60,indice61,indice62,indice63,indice64,indice65,indice66,indice67,indice68,indice69,indice70,indice71,indice72,indice73,indice74,indice75,indice76,indice77,indice78,indice79,indice80,indice81,indice82,indice83];

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
          
        case 12:
            listeIndiceParPerso.push(tabIndice[0]);
            listeIndiceParPerso.push(tabIndice[3]);
            listeIndiceParPerso.push(tabIndice[4]);
            listeIndiceParPerso.push(tabIndice[9]);
            listeIndiceParPerso.push(tabIndice[12]);
            listeIndiceParPerso.push(tabIndice[14]);
            listeIndiceParPerso.push(tabIndice[20]);
          
        case 13:
            listeIndiceParPerso.push(tabIndice[1]);
            listeIndiceParPerso.push(tabIndice[7]);
            listeIndiceParPerso.push(tabIndice[11]);
            listeIndiceParPerso.push(tabIndice[17]);
            listeIndiceParPerso.push(tabIndice[23]);
            listeIndiceParPerso.push(tabIndice[30]);
          
        case 14:
            listeIndiceParPerso.push(tabIndice[1]);
            listeIndiceParPerso.push(tabIndice[11]);
            listeIndiceParPerso.push(tabIndice[17]);
            listeIndiceParPerso.push(tabIndice[27]);
            listeIndiceParPerso.push(tabIndice[32]);
          
        case 15:
            listeIndiceParPerso.push(tabIndice[0]);
            listeIndiceParPerso.push(tabIndice[2]);
            listeIndiceParPerso.push(tabIndice[3]);
            listeIndiceParPerso.push(tabIndice[9]);
            listeIndiceParPerso.push(tabIndice[14]);
            listeIndiceParPerso.push(tabIndice[22]);
          
        case 16:
            listeIndiceParPerso.push(tabIndice[1]);
            listeIndiceParPerso.push(tabIndice[11]);
            listeIndiceParPerso.push(tabIndice[17]);
            listeIndiceParPerso.push(tabIndice[28]);
          
        case 17:
            listeIndiceParPerso.push(tabIndice[1]);
            listeIndiceParPerso.push(tabIndice[10]);
            listeIndiceParPerso.push(tabIndice[17]);
            listeIndiceParPerso.push(tabIndice[23]);
          
        case 18:
            listeIndiceParPerso.push(tabIndice[0]);
            listeIndiceParPerso.push(tabIndice[4]);
            listeIndiceParPerso.push(tabIndice[9]);
            listeIndiceParPerso.push(tabIndice[16]);
            listeIndiceParPerso.push(tabIndice[18]);
          
        case 19:
            listeIndiceParPerso.push(tabIndice[1]);
            listeIndiceParPerso.push(tabIndice[11]);
            listeIndiceParPerso.push(tabIndice[15]);
            listeIndiceParPerso.push(tabIndice[25]);
          
        case 20:
            listeIndiceParPerso.push(tabIndice[0]);
            listeIndiceParPerso.push(tabIndice[9]);
            listeIndiceParPerso.push(tabIndice[16]);
            listeIndiceParPerso.push(tabIndice[22]);
            listeIndiceParPerso.push(tabIndice[31]);
          
        case 21:
            listeIndiceParPerso.push(tabIndice[0]);
            listeIndiceParPerso.push(tabIndice[3]);
            listeIndiceParPerso.push(tabIndice[8]);
            listeIndiceParPerso.push(tabIndice[16]);
            listeIndiceParPerso.push(tabIndice[24]);
          
        case 22:
            listeIndiceParPerso.push(tabIndice[0]);
            listeIndiceParPerso.push(tabIndice[3]);
            listeIndiceParPerso.push(tabIndice[4]);
            listeIndiceParPerso.push(tabIndice[6]);
            listeIndiceParPerso.push(tabIndice[9]);
            listeIndiceParPerso.push(tabIndice[14]);
          
        case 23:
            listeIndiceParPerso.push(tabIndice[1]);
            listeIndiceParPerso.push(tabIndice[5]);
            listeIndiceParPerso.push(tabIndice[7]);
            listeIndiceParPerso.push(tabIndice[15]);
            listeIndiceParPerso.push(tabIndice[21]);

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
