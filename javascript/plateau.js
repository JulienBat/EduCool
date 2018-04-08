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

  var nbIndice = 2;
  var indice1 = "Cheveux blonds";
  var indice2 = "Chauve";
  var tabIndice = [indice1,indice2];

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
          listeIndiceParPerso.push(tabIndice[0]);
          listeIndiceParPerso.push(tabIndice[1]);

        case 1:
          listeIndiceParPerso.push(tabIndice[1]);
          listeIndiceParPerso.push(tabIndice[0]);

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
