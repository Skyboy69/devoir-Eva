var structureGameElement = {
								name: "",
								tag: "",
						   };

//tab pour choix de couleur pour jeux association de couleur en anglais
var tabColors = [
					{name: "Red",     tag: "Crimson"},
					{name: "Pink",    tag: "hotpink"},
					{name: "Blue",    tag: "DodgerBlue"},
					{name: "Green",   tag: "LimeGreen"},
					{name: "White",   tag: "white"},
					{name: "Orange",  tag: "Orange"},
					{name: "Purple",  tag: "purple"},
					{name: "Gray",    tag: "gray"},	
				];

var tabMotsCles = [
					{name: "fille",       tag: 'url(images/mots/fille.gif)'},
					{name: "bébé",        tag: 'url(images/mots/bebe.png)'},
					{name: "ballon",      tag: 'url(images/mots/ballon.jpg)'},
					{name: "fleur",       tag: 'url(images/mots/fleur.jpeg)'},
					{name: "garçon",      tag: 'url(images/mots/garcon.gif)'},
					{name: "pomme",       tag: 'url(images/mots/pomme.png)'},
					{name: "arbre",       tag: 'url(images/mots/arbre.png)'},
					{name: "classe",      tag: 'url(images/mots/classe.png)'},
					{name: "chien",       tag: 'url(images/mots/chien.png)'},
					{name: "chat",        tag: 'url(images/mots/chat.png)'},
					{name: "école",       tag: 'url(images/mots/ecole.png)'},
					{name: "un",          tag: 'url(images/mots/un.png)'},
					{name: "deux",        tag: 'url(images/mots/deux.png)'},
					{name: "trois",       tag: 'url(images/mots/trois.png)'},
					{name: "quatre",      tag: 'url(images/mots/quatre.png)'},
					{name: "neige",       tag: 'url(images/mots/neige.png)'},
					{name: "maison",      tag: 'url(images/mots/maison.png)'},
					{name: "orange",      tag: 'url(images/mots/orange.png)'},
					{name: "livre",       tag: 'url(images/mots/livre.png)'},
				  ];
				  

var tabWords = [
					{name: "girl",        tag: 'url(images/mots/fille.gif)'},
					{name: "baby",        tag: 'url(images/mots/bebe.png)'},
					{name: "ball",        tag: 'url(images/mots/ballon.jpg)'},
					{name: "flower",      tag: 'url(images/mots/fleur.jpeg)'},
					{name: "boy",         tag: 'url(images/mots/garcon.gif)'},
					{name: "apple",       tag: 'url(images/mots/pomme.png)'},
					{name: "tree",        tag: 'url(images/mots/arbre.png)'},
					{name: "class",       tag: 'url(images/mots/classe.png)'},
					{name: "dog",         tag: 'url(images/mots/chien.png)'},
					{name: "cat",         tag: 'url(images/mots/chat.png)'},
					{name: "school",      tag: 'url(images/mots/ecole.png)'},
					{name: "one",         tag: 'url(images/mots/un.png)'},
					{name: "two",         tag: 'url(images/mots/deux.png)'},
					{name: "three",       tag: 'url(images/mots/trois.png)'},
					{name: "four",        tag: 'url(images/mots/quatre.png)'},
					{name: "snow",        tag: 'url(images/mots/neige.png)'},
					{name: "house",       tag: 'url(images/mots/maison.png)'},
					{name: "orange",      tag: 'url(images/mots/orange.png)'},
					{name: "book",        tag: 'url(images/mots/livre.png)'},
				  ];
				  
var answer = "";				
				
var tabAnswer = [];

var idTimer;

var buttom = false;

var numberGoodAnswer = 0;
var numberTotalAnswer = 0;

function load_page(noBlackBord) {
		
	// pour aller chercher la resolution ecran du client "screen.availHeight"
	// et creer un div selon la resolution de la fenetre

	var hauteurBlackboard = (window.innerHeight - 245) + 'px';

	var nombreBlackboard = calculNombreBlackboardPage();

	afficheBlackboard(hauteurBlackboard, nombreBlackboard);

	displaySubMenu(noBlackBord)
	
	recursiveLoad = setTimeout(load_page, 200, noBlackBord);
}

function stopRecursiveLoad(){
	
	clearTimeout(recursiveLoad); 
}

function calculNombreBlackboardPage() {	

	var x = document.getElementsByClassName("menu").length;
	return x;
}

// pour creer le div du blackboard selon la resolution d'ecran du client
function afficheBlackboard(hauteur, max) {
	
	for (i = 0; i < max; i++) {
	document.getElementById("screen_blackboard" + i).style.height = hauteur;
	}	
}

function displaySubMenu(nbr) {
	
	var nombre_blackboard = calculNombreBlackboardPage();
	
	clearScreenBlackboard(nombre_blackboard);
	
	document.getElementById("screen_blackboard" + nbr).style.display = "block";	
}

function clearScreenBlackboard(max) {
	
	for (i = 0; i < max; i++) {
		document.getElementById("screen_blackboard" + i).style.display = "none";
	}	
}

function load_game_mathEquation(signe,min,max,numberDisplay){
	
	clearDivMessageUser();

	var nombre1 = random(min,max);
	
	var nombre2 = random(min,max);
	
	if ((signe == "-")&&(nombre1<nombre2)) {
		
		switchNombre(nombre1,nombre2);		
	}else{
		
		afficheNombre(nombre1, nombre2);
	}

	displayAnswer(numberDisplay);
}

function load_game_mathReglettes(){
	
	initialiserCouleurReglette();
	
	var nombre1 = random(1,99);
	
	afficheNombrePourReglettes(nombre1);
	
	buttom = false;
		
}

function load_game_mathPlusPetitPlusGranEgal(min,max,numberDisplay)
{
	clearDivMessageUser();
	
    var nombre1 = random(min,max);
	
    var nombre2 = random(min,max);
	
	afficheNombre(nombre1, nombre2);
	
	displayAnswer(numberDisplay);
	
}

function load_game_mathCroissant(min,max)
{
		
	createBaliseHTMLForNumberCroissant();
	
	clearDivMessageUser2();
	
	creatTabAnswerNumber(min,max)
		
	AfficherNombreCroissant();
	
}

function creatTabAnswerNumber(min,max) {

	tabAnswer = [];
	
	tabAnswer.push(random(min,max));
			
	for (i=1; i<5; i++) {
		
		creatRandomAnswerNumber(min,max);
	}
}

function creatRandomAnswerNumber(min,max) {
	
	var flag = false;

	var numberRandom = random(min,max);
	
	for(i = 0; i<tabAnswer.length; i++){

		if (numberRandom == tabAnswer[i]) {
			
			flag = true;		
		}
	}
	
	if (flag == true) {
		
		creatRandomAnswerNumber(min,max);
	} else {
		
		tabAnswer.push(numberRandom);
	}
}

function createBaliseHTMLForNumberCroissant()
{
	
	document.getElementById('ligne1').innerHTML = '<td class="td_menu_w25_h30"></td>'+
												  '<td class="td_menu_w10_h30"><div class="caseDrag" id="div1" ondrop="drop(event)"ondragover="allowDrop(event)"><h2 id="drag1" draggable="true" ondragstart="drag(event)"></h2></div></td>'+
												  '<td class="td_menu_w10_h30"><div class="caseDrag" id="div2" ondrop="drop(event)"ondragover="allowDrop(event)"><h2 id="drag2" draggable="true" ondragstart="drag(event)"></h2></div></td>'+
												  '<td class="td_menu_w10_h30"><div class="caseDrag" id="div3" ondrop="drop(event)"ondragover="allowDrop(event)"><h2 id="drag3" draggable="true" ondragstart="drag(event)"></h2></div></td>'+
												  '<td class="td_menu_w10_h30"><div class="caseDrag" id="div4" ondrop="drop(event)"ondragover="allowDrop(event)"><h2 id="drag4" draggable="true" ondragstart="drag(event)"></h2></div></td>'+
												  '<td class="td_menu_w10_h30"><div class="caseDrag" id="div5" ondrop="drop(event)"ondragover="allowDrop(event)"><h2 id="drag5" draggable="true" ondragstart="drag(event)"></h2></div></td>'+
												  '<td class="td_menu_w25_h30"></td>';
												  
	document.getElementById('ligne2').innerHTML = '<td class="td_menu_25"></td>'+
												  '<td class="td_menu_10 "><div class="caseDrop" id="divAnswer1" ondrop="drop(event)"ondragover="allowDrop(event)"></div></td>'+
											      '<td class="td_menu_10 "><div class="caseDrop" id="divAnswer2" ondrop="drop(event)"ondragover="allowDrop(event)"></div></td>'+
												  '<td class="td_menu_10 "><div class="caseDrop" id="divAnswer3" ondrop="drop(event)"ondragover="allowDrop(event)"></div></td>'+
												  '<td class="td_menu_10 "><div class="caseDrop" id="divAnswer4" ondrop="drop(event)"ondragover="allowDrop(event)"></div></td>'+
												  '<td class="td_menu_10 "><div class="caseDrop" id="divAnswer5" ondrop="drop(event)"ondragover="allowDrop(event)"></div></td>'+							
												  '<td class="td_menu_25"><div id="div_message_user"></div></td>';											  
}

function AfficherNombreCroissant()
{
	
	document.getElementById("drag1").innerHTML = tabAnswer[0];
	document.getElementById("drag2").innerHTML = tabAnswer[1];
	document.getElementById("drag3").innerHTML = tabAnswer[2];
	document.getElementById("drag4").innerHTML = tabAnswer[3];
    document.getElementById("drag5").innerHTML = tabAnswer[4];
	
}

function afficheNombrePourReglettes(nbr1) {
	
	document.getElementById("nbr1").innerHTML = nbr1;	
}

function random(min,max) {
	
	var nombre = Math.floor(Math.random()*(max - min+1)+min);
	
	return nombre
}

function afficheNombre(nbr1,nbr2) {
	
	document.getElementById("nbr1").innerHTML = nbr1;
	document.getElementById("nbr2").innerHTML = nbr2;	
}

// item=nombre choisi par user // min/max= chiffre minimum/maximum dans random // numberDisplay = case tableau class(display) pour affichage des choix de reponse
function verifierEquation(item,min,max,numberDisplay) {
	
	var reponseUser = item.innerHTML;
	var nbr1 = parseInt(document.getElementById("nbr1").innerHTML);
	var nbr2 = parseInt(document.getElementById("nbr2").innerHTML);
	var signe = document.getElementById("signe").innerHTML;
	
	clearAnswer(numberDisplay);
	
	var reponseEquation = calculEquation(nbr1,nbr2,signe);
	
	if (reponseUser == reponseEquation) {
		
		displayAfterGoodAnswer(reponseEquation)
		
		numberGoodAnswer ++; 
		numberTotalAnswer ++;
		
		afficheNumberGoodAnswer();
		
		setTimeout(load_game_mathEquation, 2000, signe,min,max,numberDisplay);
	}else {

		displayAfterBadAnswer(reponseEquation)
		 
		numberTotalAnswer ++;
			
		afficheNumberGoodAnswer();
		
		setTimeout(load_game_mathEquation, 2000, signe,min,max,numberDisplay);
	}	
}

function verifierPluspetitPLusGrandEgal(reponseUser,min,max,numberDisplay)
{

    var nbr1 = parseInt(document.getElementById("nbr1").innerHTML);
    var nbr2 = parseInt(document.getElementById("nbr2").innerHTML);
	
	clearAnswer(numberDisplay);
	
	var reelAnswer = trouverReponsePlusPetitPlusGrandEgale(nbr1,nbr2);

	if(reponseUser == reelAnswer)
	{
		
		displayAfterGoodAnswer(reelAnswer)
		
		numberGoodAnswer ++; 
		numberTotalAnswer ++;
		
		afficheNumberGoodAnswer();
		
		setTimeout(load_game_mathPlusPetitPlusGranEgal, 2000, min,max,numberDisplay);
	}
	else
	{
		
		displayAfterBadAnswer(reelAnswer)
		 
		numberTotalAnswer ++;
			
		afficheNumberGoodAnswer();
		
		setTimeout(load_game_mathPlusPetitPlusGranEgal, 2000, min,max,numberDisplay);		
	}	
}

function trouverReponsePlusPetitPlusGrandEgale(nbr1,nbr2)
{
	var symbole;
	
	if(nbr1 == nbr2)
	{
		symbole = "=";
	}
	else if (nbr1 < nbr2)
	{
		symbole = "<";
	}
	else
	{
		symbole = ">";
	}
	
	return symbole;
}

function displayAfterGoodAnswer(goodAnswer) {
	
	document.getElementById("div_message_user").style.display = "block";
	document.getElementById("div_message_user").style.backgroundImage = "url('images/crochet_vert.png')";
	document.getElementById("div_message_user2").innerHTML = goodAnswer;
	
	playSoundGoodAnswer()
}

function displayAfterBadAnswer(goodAnswer) {
	
	document.getElementById("div_message_user").style.display = "block";
	document.getElementById("div_message_user").style.backgroundImage = "url('images/x_rouge.svg')";
	document.getElementById("div_message_user2").innerHTML = goodAnswer;
		
	playSoundBadAnswer()
}

function calculEquation(x,y,signe) {
	
	switch (signe) {
		case "+":
			var reponse = x + y;
			return reponse;
		case "-":
			var reponse = x - y;
			return reponse;
	}
}

function switchNombre(x,y) {

	var tempo = x;
	x = y;
	y = tempo;

	afficheNombre(x, y);
}

function clearAnswer(i) {
	
	var elements = document.getElementsByClassName("display");
	
	elements[i].style.display = "none";	
}

function displayAnswer(i) {
	
	var elements = document.getElementsByClassName("display");
	
	elements[i].style.display = "block";
}

function clearDivMessageUser() {
	
	document.getElementById("div_message_user").style.display = "none";	
	document.getElementById("div_message_user2").innerHTML = "";
}

function clearDivMessageUser2() {
	
	document.getElementById("div_message_user").style.display = "none";	
	
}

function loadGameEnglishColors(min,max,numberDisplay) {
	
	clearDivMessageUser();
	
	var elementRandom = random(min,max);
	
	displayColorPicture(elementRandom,tabColors);
	
	answer = tabColors[elementRandom];
	
	creatTabAnswer(min,max,answer,tabColors);

	mixTabAnswer();
	
	displayAnswer(numberDisplay);
	
	displayOfferedChoices(3);	
}

function loadGameFrancaisMotsCles(min,max,numberDisplay) {
	
	clearDivMessageUser();
	
	var elementRandom = random(min,max);
	
	displayPicture(elementRandom,tabMotsCles);
	
	answer = tabMotsCles[elementRandom];
	
	creatTabAnswer(min,max,answer,tabMotsCles);
	
	mixTabAnswer();
	
	displayAnswer(numberDisplay);
	
	displayOfferedChoices(3);	
}

function load_game_lettreAvantApres(numberDisplay) {

    clearDivMessageUser();

    var random_ascii = Math.floor((Math.random() * 25) + 97);
    var lettre = String.fromCharCode(random_ascii);


    answer = String.fromCharCode(random_ascii+1);

    document.getElementById("lettre").innerHTML = "Quelle est la lettre après : " + lettre;

    creatTabAnswerletters(answer,lettre);

    mixTabAnswer();

    displayAnswer(numberDisplay);

    displayOfferedChoicesLetters(5);

}

function creatTabAnswerletters(answer, lettre) {

    tabAnswer = [];

    tabAnswer.push(answer);

    for (i = 1; i < 6; i++) {

        creatRandomAnswerLetters(lettre);
    }
}

function creatRandomAnswerLetters(lettre) {

    var flag = false;

    var elementRandom = Math.floor((Math.random() * 25) + 97);

    element = String.fromCharCode(elementRandom);

    for (i = 0; i < tabAnswer.length; i++) {

        if (element == tabAnswer[i] || element == lettre) {

            flag = true;
        }
    }

    if (flag == true) {

        creatRandomAnswerLetters(lettre);
    } else {

        tabAnswer.push(element);
    }
}

function loadGameAnglaisWords(min,max,numberDisplay) {

	clearDivMessageUser();
	
	var elementRandom = random(min,max);
	
	displayPicture(elementRandom,tabWords);
	
	answer = tabWords[elementRandom];
	
	creatTabAnswer(min,max,answer,tabWords);
	
	mixTabAnswer();
	
	displayAnswer(numberDisplay);
	
	displayOfferedChoices(3);
}

function displayPicture(nbr,tab){
	
	element = tab[nbr];
	
	document.getElementById("picture").style.backgroundImage = element.tag;
}

function checkAnswerLetters(item, numberDisplay)
{
    var reponseUser = item.innerHTML;

    clearAnswer(numberDisplay);

    if (reponseUser == answer) {

        document.getElementById("lettre").innerHTML = "";

        var message = "Bravo!  La lettre rechercher était bien " + answer;

        displayAfterGoodAnswer(message);

        numberGoodAnswer++;
        numberTotalAnswer++;

        afficheNumberGoodAnswer();

        setTimeout(load_game_lettreAvantApres, 3000, numberDisplay);

    } else {

        document.getElementById("lettre").innerHTML = "";

        var message = "Désolé!  La lettre rechercher était " + answer;

        displayAfterBadAnswer(message);

        numberTotalAnswer++;

        afficheNumberGoodAnswer();

        setTimeout(load_game_lettreAvantApres, 3000, numberDisplay);
    }
}

function checkAnswer(item,min,max,numberDisplay,game) {

	var reponseUser = item.innerHTML;
	
	clearAnswer(numberDisplay);

	if (reponseUser == answer.name) {
		
		displayAfterGoodAnswer(answer.name);
		
		numberGoodAnswer ++; 
		numberTotalAnswer ++;
		
		afficheNumberGoodAnswer();
		
		nextAnswer(min,max,numberDisplay,game);
		
	}else {
		
		displayAfterBadAnswer(answer.name);
		 
		numberTotalAnswer ++;
		
		afficheNumberGoodAnswer();
		
		nextAnswer(min,max,numberDisplay,game)
	}
}

function nextAnswer (min,max,numberDisplay,game) {
	
	switch (game) {
	case "anglais_colors":	
		setTimeout(loadGameEnglishColors, 2000, min,max,numberDisplay);
        break;

	case "mots_cles":		
		setTimeout(loadGameFrancaisMotsCles, 2000, min,max,numberDisplay);
        break;

	case "words":		
		setTimeout(loadGameAnglaisWords, 2000, min,max,numberDisplay);
		break;		
	}
}

function displayColorPicture(nbr,tab) {
	
	element = tab[nbr];
	
	document.getElementById("colorPicture").style.backgroundColor = element.tag;
}

function creatTabAnswer(min,max,answer,tab) {

	tabAnswer = [];
	
	tabAnswer.push(answer);
	
	for (i=1; i<4; i++) {
		
		creatRandomAnswer(min,max,tab);
	}
}

function creatRandomAnswer(min,max,tab) {
	
	var flag = false;

	var elementRandom = random(min,max);
	
	element = tab[elementRandom];
	
	for(i = 0; i<tabAnswer.length; i++){

		if (element.name == tabAnswer[i].name) {
			
			flag = true;		
		}
	}
	
	if (flag == true) {
		
		creatRandomAnswer(min,max,tab);
	} else {
		
		tabAnswer.push(element);
	}
}

function mixTabAnswer() {
	
	for (var i = tabAnswer.length - 1; i > 0; i--) {
		
		var j = Math.floor(Math.random() * (i + 1));
		var temp = tabAnswer[i];
		
		tabAnswer[i] = tabAnswer[j];
		tabAnswer[j] = temp;
	}
}

function displayOfferedChoices(max) {

	for (i = 0; i <= max; i++) {
		document.getElementById("offeredChoices" + i).innerHTML = tabAnswer[i].name;
	}
}

function displayOfferedChoicesLetters(max) {

    for (i = 0; i <= max; i++) {
        document.getElementById("offeredChoices" + i).innerHTML = tabAnswer[i];
    }
}

function notDisplayOfferedChoices(max) {
	
	for (i = 0; i <= max; i++) {
		document.getElementById("offeredChoices" + i).innerHTML = "";
	}
}

function initialiserCouleurReglette()
{
	
	for(nbr = 1; nbr <= 9; nbr++)
	{		
		document.getElementById("reglette" + nbr).style.removeProperty("background-color");
		document.getElementById("unite" + nbr).style.removeProperty("background-color");		
	}	
}

function ajouterReglette10(nbr)
{
	
	var couleur = document.getElementById("reglette" + nbr).style.backgroundColor;
	
	if(couleur != "orangered")
	{			
		document.getElementById("reglette" + nbr).style.backgroundColor = "orangered";
	}
	else
	{
		document.getElementById("reglette" + nbr).style.backgroundColor = "transparent";		
	}
}

function ajouterunite(nbr)
{
	
	var couleur = document.getElementById("unite" + nbr).style.backgroundColor;
	
	if(couleur != "white")
	{			
		document.getElementById("unite" + nbr).style.backgroundColor = "White";
	}
	else
	{
		document.getElementById("unite" + nbr).style.backgroundColor = "transparent";	
	}
}

function checkAnwserReglette()
{
	
	if(buttom == false)
	{
		buttom = true;
		var answer = document.getElementById("nbr1").innerHTML;
		var rep = 0
		
		rep = reponseUserReglette();
		
		if(answer == rep)
		{
			numberGoodAnswer ++; 
			numberTotalAnswer ++;
			
			afficheNumberGoodAnswer();
			
			playSoundGoodAnswer();
			setTimeout(load_game_mathReglettes, 2000);			
		}
		else
		{			
			numberTotalAnswer ++;
			
			afficheNumberGoodAnswer();
			
			playSoundBadAnswer();
			setTimeout(load_game_mathReglettes, 2000);			
		}			
	}			
}

function playSoundGoodAnswer()
{
	var son = new Audio('audio/goodAnswer.mp3')
	son.play();	
}

function playSoundBadAnswer()
{
	var son = new Audio('audio/badAnswer.mp3')
	son.play();		
}

function reponseUserReglette()
{
	var rep = 0
	
	for(nbr = 1; nbr <= 9; nbr++)
	{		
		var couleurDizaine = document.getElementById("reglette" + nbr).style.backgroundColor;
	
		if(couleurDizaine == "orangered")
		{
			rep +=10;			
		}
		
		var couleurUnite = document.getElementById("unite" + nbr).style.backgroundColor;
	
		if(couleurUnite == "white")
		{
			rep +=1;			
		}				
	}	
	return rep;	
}

function afficheNumberGoodAnswer()
{
    document.getElementById("compteurGoodAnswer").innerHTML = numberGoodAnswer + "/" + numberTotalAnswer;
    
}

function checkAnwserCroissantDecroissant(min, max, game)
{
	var nombre1 = parseInt(document.getElementById("divAnswer1").innerText);
	var nombre2 = parseInt(document.getElementById("divAnswer2").innerText);
	var nombre3 = parseInt(document.getElementById("divAnswer3").innerText);
	var nombre4 = parseInt(document.getElementById("divAnswer4").innerText);
    var nombre5 = parseInt(document.getElementById("divAnswer5").innerText);

    //alert(game);
	
	if(!isNaN(nombre1) && !isNaN(nombre2) && !isNaN(nombre3) && !isNaN(nombre4) && !isNaN(nombre5))
    {

        switch (game) {
            case "-+":
                checkCroissant(nombre1, nombre2, nombre3, nombre4, nombre5, min, max);
                break;
            case "+-":
                checkDecroissant(nombre1, nombre2, nombre3, nombre4, nombre5, min, max)
                break;
        }
               
	}

}

function checkCroissant(nombre1, nombre2, nombre3, nombre4, nombre5 ,min, max)
{

    if (nombre1 < nombre2 && nombre2 < nombre3 && nombre3 < nombre4 && nombre4 < nombre5) {

        displayAfterGoodAnswer2();

        numberGoodAnswer++;
        numberTotalAnswer++;

        afficheNumberGoodAnswer();

        setTimeout(load_game_mathCroissant, 2000, min, max);
    }
    else {

        displayAfterBadAnswer2();

        numberTotalAnswer++;

        afficheNumberGoodAnswer();

        setTimeout(load_game_mathCroissant, 2000, min, max);
    }

}

function checkDecroissant(nombre1, nombre2, nombre3, nombre4, nombre5, min, max)
{
    if (nombre1 > nombre2 && nombre2 > nombre3 && nombre3 > nombre4 && nombre4 > nombre5) {

        displayAfterGoodAnswer2();

        numberGoodAnswer++;
        numberTotalAnswer++;

        afficheNumberGoodAnswer();

        setTimeout(load_game_mathCroissant, 2000, min, max);
    }
    else {

        displayAfterBadAnswer2();

        numberTotalAnswer++;

        afficheNumberGoodAnswer();

        setTimeout(load_game_mathCroissant, 2000, min, max);
    }

}

function displayAfterGoodAnswer2()
{
	
	document.getElementById("div_message_user").style.display = "block";
	document.getElementById("div_message_user").style.backgroundImage = "url('images/crochet_vert.png')";
	
	playSoundGoodAnswer();
}

function displayAfterBadAnswer2()
{
	
	document.getElementById("div_message_user").style.display = "block";
	document.getElementById("div_message_user").style.backgroundImage = "url('images/x_rouge.svg')";
	
	playSoundBadAnswer();	
	
}

/*------------------------------------touche utiliser par utilisateur--------------------------------*/ 

function toucheUtilisateurMotOrthographe(event)
{

   // var chCode = ('charCode' in event) ? event.charCode : event.keyCode;
    var x = event.charCode || event.keyCode; //unicode
    var y = String.fromCharCode(x);

   

    answer = answer + y;

    document.getElementById("motUser").innerHTML = answer;

   // alert(x);
}



/*--------------------------------------drag and drop and switch-------------------------------------*/

function allowDrop(ev)
{
	ev.preventDefault();
}

function drag(ev)
{
	ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev)
{
    var noDivAnswer = ev.target.id; 
	
    if (document.getElementById(noDivAnswer).innerHTML == "") {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));
    }
    else
    {

        ev.preventDefault();
        var data = document.getElementById(ev.dataTransfer.getData("text"));
        var dataParent = data.parentNode;
        var tgt = ev.currentTarget.firstElementChild;

        ev.currentTarget.replaceChild(data, tgt);
        dataParent.appendChild(tgt);

    }
}

/*----------------------------------------------------------------------------------------*/
