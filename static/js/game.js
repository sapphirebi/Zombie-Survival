//var rsouce=document.getElementById("usersouce").value="100" ;

var map1 = new Array(
	[-1,-1,-1,-1,-1,-1,-1,31,31,-1,-1,-1,-1,-1,-1],  
	[-1,-1,-1,-1,-1, 1,-1, 0, 0,-1,-1,-1,-1,-1,-1], 
	[-1,-1,-1,-1,-1, 0,-1, 0, 0,-1,-1, 1,-1,-1,-1], 
	[-1,-1,-1, 1, 0, 0,-1, 0, 0,-1,-1, 0,-1,-1,-1],   
	[-1,-1,-1,-1,-1, 0,-1, 0, 0,-1,-1, 0,-1,-1,-1],  
	[-1,-1,-1,-1,-1, 0, 0, 0, 0, 0, 0, 0,-1,-1,-1],  
	[-1,-1,-1,-1,-1, 0,-1,-1,-1,-1,-1, 0,-1,-1,-1],  
	[-1, 1, 0, 0, 0, 0,-1,-1,-1,-1,-1, 0,-1,-1,-1],   
	[-1,-1,-1, 0,-1,-1,-1,-1,-1,-1,-1, 0, 0, 1,-1],  
	[-1,-1,-1, 0,-1,-1,-1,-1,-1,-1,-1, 0,-1,-1,-1], 
	[-1,-1,-1, 0, 0, 0, 0, 0, 0, 0, 0, 0,-1,-1,-1], 
	[-1,-1,-1, 0,-1,-1, 0, 0,-1,-1,-1, 0,-1,-1,-1], 
	[-1, 1, 0, 0,-1,-1, 0, 0,-1,-1,-1, 0, 0, 1,-1], 
	[-1,-1,-1,-1,-1,-1, 0, 0,-1,-1,-1,-1,-1,-1,-1], 
	[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]  
);

var map2 = new Array(
	[-1,-1,-1,-1,-1,-1,31,31,-1,-1,-1,-1,-1,-1,-1],  
	[-1,-1,-1,-1,-1,-1, 0, 0,-1,-1,-1,-1,-1,-1,-1], 
	[-1,-1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,-1,-1], 
	[-1, 1, 0,-1, 1,-1,-1,-1,-1,-1,-1,-1, 0,-1,-1],   
	[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1, 0,-1,-1],  
	[-1,-1,-1,-1,-1,-1,-1, 0, 0, 0, 0, 0, 0, 0, 1],  
	[-1,-1, 1, 0, 0, 0, 0, 0,-1,-1,-1,-1,-1,-1,-1],  
	[-1,-1,-1,-1, 0,-1,-1, 0,-1,-1,-1,-1,-1,-1,-1],   
	[-1,-1,-1,-1, 0,-1,-1, 0, 0, 0, 1,-1,-1,-1,-1],  
	[-1,-1,-1,-1, 0,-1,-1, 0,-1,-1,-1,-1,-1, 1,-1], 
	[-1,-1,-1,-1, 0,-1,-1, 0,-1,-1,-1,-1,-1, 0,-1], 
	[-1, 0, 0, 0, 0, 0, 0, 0,-1,-1,-1,-1,-1, 0,-1], 
	[-1, 0,-1,-1,-1,-1, 0, 0, 0, 0, 0, 0, 0, 0,-1], 
	[-1, 1,-1,-1,-1,-1, 0, 0,-1,-1,-1,-1,-1,-1,-1], 
	[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]  
);

var map3 = new Array(
	[-1,-1,-1,-1,-1,-1,31,31,-1,-1,-1,-1,-1,-1,-1],  
	[-1,-1,-1,-1,-1,-1, 0, 0, 0, 0, 0, 0, 0, 1,-1], 
	[-1,-1, 0, 0, 0, 0, 0,-1,-1,-1,-1,-1,-1,-1,-1], 
	[-1,-1, 0,-1,-1,-1, 0,-1,-1,-1,-1,-1, 1,-1,-1],   
	[-1,-1, 1,-1,-1,-1, 0, 0, 0, 0, 0, 0, 0, 0,-1],  
	[-1, 1, 0, 0, 0, 0, 0,-1,-1,-1,-1,-1, 0, 0,-1],  
	[-1,-1,-1,-1, 0,-1,-1,-1,-1,-1,-1,-1, 0, 0,-1],  
	[-1,-1,-1,-1, 1,-1,-1,-1,-1,-1,-1, 0, 0, 0,-1],   
	[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1, 0,-1,-1,-1],  
	[-1,-1,-1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,-1,-1], 
	[-1, 1, 0, 0,-1,-1,-1, 0,-1,-1,-1,-1,-1,-1,-1], 
	[-1,-1,-1, 0, 0, 0, 0, 0,-1,-1,-1,-1,-1,-1,-1], 
	[-1,-1,-1,-1,-1,-1, 0, 0,-1,-1,-1,-1,-1,-1,-1], 
	[-1,-1,-1,-1,-1,-1, 0, 0, 0, 0, 0, 0, 0, 1,-1], 
	[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]   
);



var houseMap1 = new Array(
	[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],   
	[-1,-1,-1, 0, 0, 0, 0, 0, 0,-1,-1,-1,-1,-1,-1],  
	[-1,-1,-1, 0, 0, 0, 0, 0, 0,-1,-1,-1,-1,-1,-1],    
	[-1,-1,-1, 0,-1,-1, 0, 0, 0,-1,-1,-1,-1,-1,-1],   
	[-1,-1,-1, 1,-1,-1, 0, 0, 0,-1,-1,-1,-1,-1,-1],     
	[-1,-1,-1,-1,-1,-1, 0, 0, 0,-1,-1, 1,-1,-1,-1],     
	[-1,-1,-1,-1,-1,-1, 0, 0, 0, 0, 0, 0,-1,-1,-1],   
	[-1,-1,-1,-1,-1,-1, 0, 0, 0, 0, 0, 0,-1,-1,-1],     
	[-1,-1,-1, 1,-1,-1, 0, 0, 0,-1,-1,-1,-1,-1,-1], 
	[-1,-1,-1, 0,-1,-1, 0, 0, 0,-1,-1,-1,-1,-1,-1], 
	[-1,-1,-1, 0,-1,-1, 0, 0, 0,-1,-1,-1,-1,-1,-1], 
	[-1,-1,-1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,-1],
	[-1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,-1,-1],
	[-1,-1,-1,-1,-1,-1, 0, 0, 0,-1,-1,-1, 1,-1,-1],   
	[-1,-1,-1,-1,-1,-1,-1,10,-1,-1,-1,-1,-1,-1,-1]   
);

var houseMap2 = new Array(
	[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],   
	[-1,-1, 0, 0, 0, 0, 0, 0, 0,-1,-1,-1,-1,-1,-1],  
	[-1,-1, 0, 0, 0, 0, 0, 0, 0,-1,-1,-1,-1,-1,-1],    
	[-1,-1, 1,-1,-1,-1, 0, 0, 0,-1,-1,-1,-1,-1,-1],   
	[-1,-1,-1,-1,-1,-1, 0, 0, 0,-1,-1,-1,-1,-1,-1],     
	[-1,-1,-1,-1,-1,-1, 0, 0, 0,-1,-1, 1,-1,-1,-1],     
	[-1,-1,-1,-1,-1,-1, 0, 0, 0, 0, 0, 0,-1,-1,-1],   
	[-1,-1,-1,-1,-1,-1, 0, 0, 0, 0, 0, 0,-1,-1,-1],     
	[-1,-1,-1,-1,-1,-1, 0, 0, 0,-1,-1,-1,-1,-1,-1], 
	[-1,-1,-1,-1,-1,-1, 0, 0, 0,-1,-1,-1,-1,-1,-1], 
	[-1,-1, 1,-1,-1,-1, 0, 0, 0, 0, 0, 0, 0,-1,-1], 
	[-1,-1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,-1,-1],
	[-1,-1, 0, 0, 0, 0, 0, 0, 0,-1,-1,-1, 1,-1,-1],
	[-1,-1,-1,-1,-1,-1, 0, 0, 0,-1,-1,-1,-1,-1,-1],   
	[-1,-1,-1,-1,-1,-1,-1,10,-1,-1,-1,-1,-1,-1,-1]   
);

var houseMap3 = new Array(
	[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],   
	[-1,-1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,-1,-1],  
	[-1,-1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,-1,-1],    
	[-1,-1, 1,-1,-1,-1, 0, 0, 0,-1,-1,-1, 1,-1,-1],   
	[-1,-1,-1,-1,-1,-1, 0, 0, 0,-1,-1,-1,-1,-1,-1],     
	[-1,-1,-1,-1,-1,-1, 0, 0, 0,-1,-1,-1,-1,-1,-1],     
	[-1,-1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,-1,-1],   
	[-1,-1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,-1,-1],     
	[-1,-1, 1,-1,-1,-1, 0, 0, 0,-1,-1,-1, 1,-1,-1], 
	[-1,-1,-1,-1,-1,-1, 0, 0, 0,-1,-1,-1,-1,-1,-1], 
	[-1,-1,-1,-1,-1,-1, 0, 0, 0,-1,-1,-1,-1,-1,-1], 
	[-1,-1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,-1,-1],
	[-1,-1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,-1,-1],
	[-1,-1, 1,-1,-1,-1, 0, 0, 0,-1,-1,-1, 1,-1,-1],   
	[-1,-1,-1,-1,-1,-1,-1,10,-1,-1,-1,-1,-1,-1,-1]   
);

var roomMap1 = new Array(
	[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],  
	[-1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,21,-1],
	[-1,23, 0, 0, 0, 0, 0, 0,-1,-1, 0, 0,24,23,-1],
	[-1, 0, 0,-1,-1, 0, 0, 0, 0,22,-1,-1,-1,-1,-1],  
	[-1, 0,-1, 0, 0, 0,22, 0,-1, 0, 0, 0, 0,-1,-1],  
	[-1,-1,-1, 0, 0, 0,-1, 0,-1, 0, 0, 0, 0,-1,-1],  
	[-1, 0,-1, 0, 0, 0, 0,23,-1, 0,-1, 0, 0, 0,-1], 
	[-1, 0,-1,-1, 0, 0,21,21,-1, 0,-1, 0, 0, 0,-1],  
	[-1, 0, 0, 0, 0, 0, 0, 0,-1, 0,-1, 0, 0,21,-1], 
	[-1, 0, 0, 0, 0, 0, 0, 0,-1, 0,-1, 0, 0, 0,-1],
	[-1,-1,-1,-1,-1,-1,22,-1,-1, 0,-1, 0, 0, 0,-1],
	[-1,21,21, 0,-1, 0, 0,-1, 0,-1,-1, 0, 0, 0,-1],
	[-1, 0, 0, 0,-1,-1, 0,-1, 0, 0,-1, 0, 0, 0,-1],
	[-1, 0, 0, 0, 0, 0,22, 0, 0, 0, 0, 0, 0, 0,-1],
	[-1,-1,-1,-1,-1,-1,-1,10,-1,-1,-1,-1,-1,-1,-1] 
);


var roomMap2 = new Array(
	[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],  
	[-1,21, 0, 0, 0, 0,-1, 0, 0, 0, 0,-1, 0, 0,-1],
	[-1,24, 0, 0, 0, 0,-1, 0, 0, 0, 0,-1,24, 0,-1],
	[-1, 0,22, 0,-1,-1,-1, 0, 0, 0,-1,21, 0, 0,-1],  
	[-1,-1, 0,-1, 0, 0,-1, 0, 0, 0,-1,21, 0, 0,-1],  
	[-1,-1, 0,-1, 0, 0,-1, 0, 0,-1, 0, 0, 0, 0,-1],  
	[-1, 0, 0, 0, 0, 0,-1, 0, 0,-1, 0, 0, 0, 0,-1], 
	[-1, 0, 0, 0, 0, 0,-1,-1,-1,-1, 0, 0, 0, 0,-1],  
	[-1, 0,-1, 0, 0, 0,23, 0, 0, 0, 0, 0,-1,22,-1], 
	[-1, 0,-1, 0, 0, 0,23, 0, 0, 0, 0,-1,22, 0,-1],
	[-1, 0,-1,-1,-1, 0, 0, 0, 0, 0,-1, 0, 0,-1,-1],
	[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1, 0, 0,-1, 0,-1],
	[-1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,-1, 0,21,-1],
	[-1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,23,-1],
	[-1,-1,-1,-1,-1,-1,-1,10,-1,-1,-1,-1,-1,-1,-1] 
);

var roomMap3 = new Array(
	[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],  
	[-1,-1, 0, 0, 0,-1, 0, 0, 0, 0, 0,22, 0,21,-1],
	[-1,24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,-1,23,-1],
	[-1, 0, 0, 0, 0, 0, 0,-1,-1,-1,-1, 0,-1, 0,-1],  
	[-1, 0, 0, 0, 0, 0,22, 0,-1, 0, 0, 0,-1,-1,-1],  
	[-1,-1,-1,-1, 0,-1,-1, 0,-1, 0, 0, 0, 0,-1,-1],  
	[-1, 0, 0, 0, 0,-1, 0, 0,-1, 0,-1, 0, 0,-1,-1], 
	[-1, 0,-1,-1,-1,-1, 0, 0,-1, 0,-1, 0, 0, 0,-1],  
	[-1, 0,-1, 0, 0,-1, 0, 0,-1, 0,-1, 0, 0,21,-1], 
	[-1, 0, 0, 0, 0,-1, 0, 0,-1, 0,-1,-1, 0, 0,-1],
	[-1, 0, 0, 0, 0, 0,22,-1,-1, 0,-1,-1, 0, 0,-1],
	[-1, 0, 0, 0, 0, 0, 0,-1, 0,-1,-1, 0, 0, 0,-1],
	[-1, 0, 0, 0, 0, 0, 0,-1, 0, 0,-1, 0, 0, 0,-1],
	[-1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,-1],
	[-1,-1,-1,-1,-1,-1,-1,10,-1,-1,-1,-1,-1,-1,-1] 
);

var state = 0;

var backgroundMap = new Array();
var temRoomMap = new Array();
var temHouseMap = new Array();

var curMap = new Array();

var locationRole = new Array(13,7);
var mainMapRole = new Array(); 
var houseMapRole = new Array();

var food = 15;
var health = 100;
var energy = 100;
var attack = 6;
var zombieAttack = 3;
var partners = 0;
var day = 0;

selectMap();
createMap(backgroundMap);
curMap[locationRole[0]][locationRole[1]] = 5;

function newStart(){
//alert("asdfsdf");
	food = 15;
	health = 100;
	energy = 100;
	attack = 6;
	zombieAttack = 3;
	partners = 0;
	day = 0; 
	state = 0;
	selectMap();
	createMap(backgroundMap);
	locationRole[0] = 13;
	locationRole[1] = 7;
	curMap[locationRole[0]][locationRole[1]] = 5;
	document.getElementById("Check").value="new";
 	//document.getElementById("info_form").submit();
	setBackground()
}

function loadGame(){
// 	alert("neow");
food = parseInt(document.getElementById("Food1").value);
health = parseInt(document.getElementById("Health1").value);
energy = parseInt(document.getElementById("Energy1").value);
attack = parseFloat(document.getElementById("Attack1").value);
zombieAttack = parseInt(document.getElementById("ZombieAttack1").value);
partners = parseInt(document.getElementById("Partners1").value);
day = parseInt(document.getElementById("Day1").value);
 
alert(food+" "+health+" "+energy+" "+attack+" "+zombieAttack+" "+partners+" "+day );
	state = 0;
	selectMap();
	createMap(backgroundMap);
	locationRole[0] = 13;
	locationRole[1] = 7;
	curMap[locationRole[0]][locationRole[1]] = 5;
	document.getElementById("Check").value="new";
	setBackground()

}

function saveGame(){

document.getElementById("Check").value="save";
 document.getElementById("info_form").submit();
}

function randomRoom(){
	var ran = parseInt(Math.random()*3+1);
	if(ran == 1){
		for (var i = 0; i < roomMap1.length; i++) {
			temRoomMap[i] = roomMap1[i].slice(0);
		}
	}
	
	else if(ran == 2){
		for (var i = 0; i < roomMap2.length; i++) {
			temRoomMap[i] = roomMap2[i].slice(0);
		}
	}
	
	else if(ran == 3){
		for (var i = 0; i < roomMap3.length; i++) {
			temRoomMap[i] = roomMap3[i].slice(0);
		}
	}

	
	
	
//	var ran = parseInt(Math.random()*5);
//	var layout = new Array();
//	for(var i = 0;i < ran; i++){
//		var row = parseInt(Math.random()*13 + 1);
//		var column = parseInt(Math.random()*13 + 1);
//		var item = parseInt(Math.random()*2 + 21);
//		temRoomMap[row][column] = item;
//	} 
}

function randomHouse(){
	var ran = parseInt(Math.random()*3+1);
	if(ran == 1){
		for (var i = 0; i < houseMap1.length; i++) {
			temHouseMap[i] = houseMap1[i].slice(0);
			
		}
	}
	
	else if(ran == 2){
		for (var i = 0; i < houseMap2.length; i++) {
			temHouseMap[i] = houseMap2[i].slice(0);
			
		}
	}
	
	else if(ran == 3){
		for (var i = 0; i < houseMap3.length; i++) {
			temHouseMap[i] = houseMap3[i].slice(0);
			
		}
	}
	
	
//	var ran = parseInt(Math.random()*5+3);
//	var layout = new Array();
//	for(var i = 0;i < ran; i++){
//		var row = parseInt(Math.random()*12 + 1);
//		var column = parseInt(Math.random()*3 + 6);
//		temHouseMap[row][column] = 22;
//	} 
}

function selectMap(){
	var ran = parseInt(Math.random()*3+1);
	if(ran == 1){
		createMapBC(map1);
	}
	
	else if(ran == 2){
		createMapBC(map2);
	}
	
	else if(ran == 3){
		createMapBC(map3);
	}
}

function createMapBC(ranMap){
	for (var i = 0; i < ranMap.length; i++) {
		backgroundMap[i] = ranMap[i].slice(0);
	}
}

function createMap(newMap){
	
	for (var i = 0; i < newMap.length; i++) {
		curMap[i] = newMap[i].slice(0);
	}
}

function changeCell(id){
	document.getElementById(id).style.background='red';
}

function setBackground(){
	foodShow();
	if(state != 4){
		document.onkeydown=keyControl; 
			for(var i=0;i<15;i++){
				for(var j=0;j<15;j++){
					cell= 100*i + j;

					if(curMap[i][j] == -1){
						if(state == 0){
							
							document.getElementById(cell).style.backgroundImage="url(../static/images/grass.png)";
							document.getElementById(cell).style.backgroundPosition="center center";
							document.getElementById(cell).style.backgroundSize="50px 30px";
						}
						else if(state == 1 || state == 2){
							document.getElementById(cell).style.backgroundImage="url(../static/images/hinder.jpg)";
							document.getElementById(cell).style.backgroundPosition="center center";
							document.getElementById(cell).style.backgroundSize="50px 30px";						}
					}
					else if (curMap[i][j] == 0) {	
						if(state == 0){
							document.getElementById(cell).style.backgroundImage="url(../static/images/road.png)";
						}	
						else{
							document.getElementById(cell).style.backgroundImage="url(../static/images/floor.jpg)";
						}
						document.getElementById(cell).style.backgroundPosition="center center";
						document.getElementById(cell).style.backgroundSize="50px 30px";
		 
					}
					else if (curMap[i][j] == 1) {
						if(state == 0){
						document.getElementById(cell).style.backgroundImage="url(../static/images/house.png)";
						}
						else{
						document.getElementById(cell).style.backgroundImage="url(../static/images/oDoor.jpg)";
						}

						
						document.getElementById(cell).style.backgroundPosition="center center";
						document.getElementById(cell).style.backgroundSize="50px 30px";
		//				document.getElementById(cell).style.backgroundImage="url(tree.jpg)";
					}
					//food
					else if (curMap[i][j] == 21) {
		//				document.getElementById(cell).style.background='pink';
						document.getElementById(cell).style.backgroundImage="url(../static/images/food.jpg)";
						document.getElementById(cell).style.backgroundPosition="center center";
						document.getElementById(cell).style.backgroundSize="50px 30px";
					}
					//zombie
					else if (curMap[i][j] == 22) {
						document.getElementById(cell).style.backgroundImage="url(../static/images/zombie.jpg)";
						document.getElementById(cell).style.backgroundPosition="center center";
						document.getElementById(cell).style.backgroundSize="50px 30px";	
					}
					//partner
					else if (curMap[i][j] == 23) {
						document.getElementById(cell).style.backgroundImage="url(../static/images/partner.jpg)";
						document.getElementById(cell).style.backgroundPosition="center center";
						document.getElementById(cell).style.backgroundSize="50px 30px";
					}
					//medcine
					else if (curMap[i][j] == 24) {
						document.getElementById(cell).style.backgroundImage="url(../static/images/madcine.jpg)";
						document.getElementById(cell).style.backgroundPosition="center center";
						document.getElementById(cell).style.backgroundSize="50px 30px";
					}
					//me
					else if (curMap[i][j] == 5) {
						if(state == 0){
						document.getElementById(cell).style.backgroundImage="url(../static/images/player2.png)";
						}
						else{
						document.getElementById(cell).style.backgroundImage="url(../static/images/player1.jpg)";
						}

						document.getElementById(cell).style.backgroundPosition="center center";
						document.getElementById(cell).style.backgroundSize="50px 30px";
					}
					//in
					else if (curMap[i][j] == 11) {
						document.getElementById(cell).style.backgroundImage="url(../static/images/oDoor.jpg)";

						document.getElementById(cell).style.backgroundPosition="center center";
						document.getElementById(cell).style.backgroundSize="50px 30px";
					}
					//out
					else if (curMap[i][j] == 10 || curMap[i][j] == 20) {
						document.getElementById(cell).style.backgroundImage="url(../static/images/oDoor.jpg)";
						document.getElementById(cell).style.backgroundPosition="center center";
						document.getElementById(cell).style.backgroundSize="50px 30px";
					}
					//next map
					else if (curMap[i][j] == 31) {
						document.getElementById(cell).style.backgroundImage="url(../static/images/nextMap.png)";
						document.getElementById(cell).style.backgroundPosition="center center";
						document.getElementById(cell).style.backgroundSize="50px 30px";
					}
					
					else if (curMap[i][j] == -31) {
						if(state == 0){
						document.getElementById(cell).style.backgroundImage="url(../static/images/brokenHouse.jpg)";
						}
						else{
						document.getElementById(cell).style.backgroundImage="url(../static/images/cDoor.jpg)";
						}
						document.getElementById(cell).style.backgroundPosition="center center";
						document.getElementById(cell).style.backgroundSize="50px 30px";
					}
		
				}
			}

	}
	else {
		for(var i=0;i<15;i++){
			for(var j=0;j<15;j++){
				cell= 100*i + j;
				document.getElementById(cell).style.background='red';
			}
		}
	}
}

function enter(){
	if(state == 0){
		document.getElementById("OutPut").value="enter house";
		randomHouse();
//		food = food - 5 - 2*partners;
		energy = energy - 30;
//		day++;
		mainMapRole = locationRole.slice(0);
		state = 1;
		createMap(temHouseMap);
		locationRole[0] = 13;
		locationRole[1] = 7;
		curMap[locationRole[0]][locationRole[1]] = 5;
		setBackground();
	}
	else if(state == 1){
		document.getElementById("OutPut").value="enter room";
		randomRoom();
//		food = food - 3 - partners;
		energy = energy - 10;
		houseMapRole = locationRole.slice(0);
		state = 2;
		createMap(temRoomMap);
		locationRole[0] = 13;
		locationRole[1] = 7;
		curMap[locationRole[0]][locationRole[1]] = 5;
		setBackground();
	}
	foodShow();
}

function exit(){
	if(state == 1){
		document.getElementById("OutPut").value="eixt house";
		
		locationRole = mainMapRole.slice(0);
		state = 0;
		createMap(backgroundMap);
		curMap[locationRole[0]][locationRole[1]] = 5;
		setBackground();
	}
	else if(state == 2){
		document.getElementById("OutPut").value="exit room";
		locationRole = houseMapRole.slice(0);
		state = 1;
		createMap(temHouseMap);
		curMap[locationRole[0]][locationRole[1]] = 5;
		setBackground();
	}

}



function moveLeft(){
//	curMap[locationRole[0]][locationRole[1]] = map[locationRole[0]][locationRole[1]];
	var nextStep = locationRole[1] - 1;
	if(curMap[locationRole[0]][nextStep] == -1 || curMap[locationRole[0]][nextStep] == -31){
		
	}
	else if(curMap[locationRole[0]][nextStep] == 1){
		if(state == 0){
			backgroundMap[locationRole[0]][nextStep] = -31;
		}
		else if (state == 1) {
			temHouseMap[locationRole[0]][nextStep] = -31; 
		}
		enter();
		
	}
	
	else if(curMap[locationRole[0]][nextStep] == 10){
		
		exit();
	}
	else{
//		food--;
		energy--;
		if(state == 0){
			createMap(backgroundMap);
		}
		else if(state == 1){
			createMap(temHouseMap);
		}
		else if(state == 2){
			createMap(temRoomMap);
			//food
			if(temRoomMap[locationRole[0]][nextStep] == 21){
				food = food + 3;
				temRoomMap[locationRole[0]][nextStep] = 0; 
				document.getElementById("OutPut").value="food + 3";
			}
			//zombie
			else if (temRoomMap[locationRole[0]][nextStep] == 22) {
				if(zombieAttack > (attack+partners)){
					health = health - 50;
					partners = 0;
					document.getElementById("OutPut").value="loss 50 health and all partners";
				}
				else if(attack - zombieAttack > 10){
				
				}
				else{
					var loss = Math.ceil(20 - (attack + partners - zombieAttack));
					if (loss < 1){
						loss = 1;
					}
					var ranLossPartner = parseInt(Math.random()*10+1);
					var lossPartners;
					if(ranLossPartner < 8){
						lossPartners = 0;
					}
					else if(ranLossPartner < 10){
						lossPartners = 1
					}
					else{
						lossPartners = 2;
					}
					if(lossPartners > 0){
						partners = partners - lossPartners;
						if(partners < 0){
							partners = 0;
						}
					}
					health = health - loss;
					document.getElementById("OutPut").value="you attack zombie and get " + loss+ " damage and you loss "+ lossPartners+" partner";
				//Math.ceil(num1);  Math.abs(num1);
				}

				attack = attack + 0.1;
				temRoomMap[locationRole[0]][nextStep] = 0;
			}
			//partners
			else if(temRoomMap[locationRole[0]][nextStep] == 23){
				partners++;
				temRoomMap[locationRole[0]][nextStep] = 0;
				document.getElementById("OutPut").value="partner + 1";
			}
			//medicine
			else if(temRoomMap[locationRole[0]][nextStep] == 24){
				health = health + 10;
				document.getElementById("OutPut").value="health + 10";
				if(health > 100){
					health = 100;
				}
				temRoomMap[locationRole[0]][nextStep] = 0;
			}
		}
		locationRole[1] = locationRole[1] - 1;
		curMap[locationRole[0]][locationRole[1]] = 5;
		setBackground();
	}
	 
}

function moveRight(){
	var nextStep = locationRole[1] + 1;
	if(curMap[locationRole[0]][nextStep] == -1 || curMap[locationRole[0]][nextStep] == -31){
	
	}
	else if(curMap[locationRole[0]][nextStep] == 1){
		if(state == 0){
			backgroundMap[locationRole[0]][nextStep] = -31;
		}
		else if (state == 1) {
			temHouseMap[locationRole[0]][nextStep] = -31; 
		}
		enter();
		
	}
	else if(curMap[locationRole[0]][nextStep] == 10){
		exit();
	}
	else{
//		food--;
		energy--;
		if(state == 0){
			createMap(backgroundMap);
		}
		else if(state == 1){
			createMap(temHouseMap);
		}
		else if(state == 2){
			createMap(temRoomMap);
			if(temRoomMap[locationRole[0]][nextStep] == 21){
				food = food + 3;
				temRoomMap[locationRole[0]][nextStep] = 0; 
				document.getElementById("OutPut").value="food + 3";
			}
			//zombie
			else if (temRoomMap[locationRole[0]][nextStep] == 22) {
				if(zombieAttack > (attack+partners)){
					health = health - 50;
					partners = 0;
					document.getElementById("OutPut").value="loss 50 health and all partners";
				}
				else if(attack - zombieAttack > 10){
				
				}
				else{
					var loss = Math.ceil(20 - (attack + partners - zombieAttack));
//					var lossPartners = Math.ceil(zombieAttack*2 - (attack + partners))
					if (loss < 1){
						loss = 1;
					}
					var ranLossPartner = parseInt(Math.random()*10+1);
					var lossPartners;
					if(ranLossPartner < 8){
						lossPartners = 0;
					}
					else if(ranLossPartner < 10){
						lossPartners = 1
					}
					else{
						lossPartners = 2;
					}
					if(lossPartners > 0){
						partners = partners - lossPartners;
						if(partners < 0){
							partners = 0;
						}
					}
					health = health - loss;
					document.getElementById("OutPut").value="you attack zombie and get " + loss+ " damage and you loss "+ lossPartners+" partner";
				//Math.ceil(num1);  Math.abs(num1);
				}

				attack = attack + 0.1;
				temRoomMap[locationRole[0]][nextStep] = 0;
			}
			//partner
			else if(temRoomMap[locationRole[0]][nextStep] == 23){
				partners++;
				temRoomMap[locationRole[0]][nextStep] = 0;
				document.getElementById("OutPut").value="partner + 1";
			}
			//medicine
			else if(temRoomMap[locationRole[0]][nextStep] == 24){
				document.getElementById("OutPut").value="health + 10";
				health = health + 10;
				if(health > 100){
					health = 100;
				}
				temRoomMap[locationRole[0]][nextStep] = 0;
			}
		}
		locationRole[1] = locationRole[1] + 1;
		curMap[locationRole[0]][locationRole[1]] = 5;
		setBackground();
	}
}

function moveTop(){
	var nextStep = locationRole[0] - 1;
	if(curMap[nextStep][locationRole[1]] == -1 || curMap[nextStep][locationRole[1]] == -31){
		
	}
	else if(curMap[nextStep][locationRole[1]] == 1){
		if(state == 0){
			backgroundMap[nextStep][locationRole[1]] = -31;
		}
		else if (state == 1) {
			temHouseMap[nextStep][locationRole[1]] = -31; 
		}
		enter();
		
	}
	else if(curMap[nextStep][locationRole[1]] == 31){
		selectMap();
		createMap(backgroundMap);
		locationRole[0] = 13;
		locationRole[1] = 7;
//		food = food - 20;
		curMap[locationRole[0]][locationRole[1]] = 5;
		setBackground();
	}
	else if(curMap[nextStep][locationRole[1]] == 10){

		exit();
	}
	else{
//		food--;
		energy--;
		if(state == 0){
			createMap(backgroundMap);
		}
		else if(state == 1){
			createMap(temHouseMap);
		}
		else if(state == 2){
			createMap(temRoomMap);
			if(temRoomMap[nextStep][locationRole[1]] == 21){
				food = food + 3;
				temRoomMap[nextStep][locationRole[1]] = 0;
				document.getElementById("OutPut").value="food + 3"; 
			}
			//zombie
			else if (temRoomMap[nextStep][locationRole[1]] == 22) {
				document.getElementById("OutPut").value="you attack zombie and get ";
				if(zombieAttack > (attack+partners)){
					health = health - 50;
					partners = 0;
					document.getElementById("OutPut").value="loss 50 health and all partners";
				}
				else if(attack - zombieAttack > 10){
				
				}
				else{
					var loss = Math.ceil(20 - (attack + partners - zombieAttack));
//					var lossPartners = Math.ceil(zombieAttack*2 - (attack + partners))
					if (loss < 1){
						loss = 1;
					}
					var ranLossPartner = parseInt(Math.random()*10+1);
					var lossPartners;
					if(ranLossPartner < 8){
						lossPartners = 0;
					}
					else if(ranLossPartner < 10){
						lossPartners = 1
					}
					else{
						lossPartners = 2;
					}
					if(lossPartners > 0){
						partners = partners - lossPartners;
						if(partners < 0){
							partners = 0;
						}
					}
					health = health - loss;
					document.getElementById("OutPut").value="you attack zombie and get " + loss+ " damage and you loss "+ lossPartners+" partner";
				//Math.ceil(num1);  Math.abs(num1);
				}
				attack = attack + 0.1;
				temRoomMap[nextStep][locationRole[1]] = 0;
			}
			//partner
			else if(temRoomMap[nextStep][locationRole[1]] == 23){
				partners++;
				temRoomMap[nextStep][locationRole[1]] = 0;
				document.getElementById("OutPut").value="partner + 1";
			}
			//medicine
			else if(temRoomMap[nextStep][locationRole[1]] == 24){
				document.getElementById("OutPut").value="health + 10";
				health = health + 10;
				if(health > 100){
					health = 100;
				}
				temRoomMap[nextStep][locationRole[1]] = 0;
			}
		}
		locationRole[0] = locationRole[0] - 1;
		curMap[locationRole[0]][locationRole[1]] = 5;
		setBackground();
	}
}

function moveDown(){
	var nextStep = locationRole[0] + 1;
	if(curMap[nextStep][locationRole[1]] == -1 || curMap[nextStep][locationRole[1]] == -31){
		
	}
	else if(curMap[nextStep][locationRole[1]] == 1){
		if(state == 0){
			backgroundMap[nextStep][locationRole[1]] = -31;
		}
		else if (state == 1) {
			temHouseMap[nextStep][locationRole[1]] = -31; 
		}
		enter();
		
	}
	else if(curMap[nextStep][locationRole[1]] == 10){

		exit();
	}
	else{
//		food--;
		energy--;
		if(state == 0){
			createMap(backgroundMap);
		}
		else if(state == 1){
			createMap(temHouseMap);
		}
		else if(state == 2){
			createMap(temRoomMap);
			if(temRoomMap[nextStep][locationRole[1]] == 21){
				food = food + 3;
				temRoomMap[nextStep][locationRole[1]] = 0; 
				document.getElementById("OutPut").value="food + 3";
			}
			//zombie
			else if (temRoomMap[nextStep][locationRole[1]] == 22) {
				if(zombieAttack > (attack+partners)){
					health = health - 50;
					partners = 0;
					document.getElementById("OutPut").value="loss 50 health and all partners";
				}
				else if(attack - zombieAttack > 10){
				
				}
				else{
					var loss = Math.ceil(20 - (attack + partners - zombieAttack));
//					var lossPartners = Math.ceil(zombieAttack*2 - (attack + partners))
					if (loss < 1){
						loss = 1;
					}
					var ranLossPartner = parseInt(Math.random()*10+1);
					var lossPartners;
					if(ranLossPartner < 8){
						lossPartners = 0;
					}
					else if(ranLossPartner < 10){
						lossPartners = 1
					}
					else{
						lossPartners = 2;
					}
					if(lossPartners > 0){
						partners = partners - lossPartners;
						if(partners < 0){
							partners = 0;
						}
					}
					health = health - loss;
					document.getElementById("OutPut").value="you attack zombie and get " + loss+ " damage and you loss "+ lossPartners+" partner";
				//Math.ceil(num1);  Math.abs(num1);
				}
				attack = attack + 0.1;
				temRoomMap[nextStep][locationRole[1]] = 0; 
			}
			//partner
			else if(temRoomMap[nextStep][locationRole[1]] == 23){
				partners++;
				temRoomMap[nextStep][locationRole[1]] = 0;
				document.getElementById("OutPut").value="partner + 1";
			}
			//medicne
			else if(temRoomMap[nextStep][locationRole[1]] == 24){
				document.getElementById("OutPut").value="health + 10";
				health = health + 10;
				if(health > 100){
					health = 100;
				}
				temRoomMap[nextStep][locationRole[1]] = 0;
			}
		}
		locationRole[0] = locationRole[0] + 1;
		curMap[locationRole[0]][locationRole[1]] = 5;
		setBackground();
	}
}


function keyControl() {
	var code = event.keyCode; 
	switch(code){
		case 65:{
			moveLeft();
			break;
		}
		case 87:{ 
		//w
			moveTop(); 
			break; 
		} 
		case 68:{ 
		//d
			moveRight(); 
			break; 
		} 
		case 83:{ 
		//s
			moveDown(); 
			break; 
		}
	}
}

function disband(){
 var r=confirm("Are you sure to disband your team? If so, you will lose half of the food");
     if (r==true)
     {
     if(partners!=0){
	food = Math.ceil(food/2);
	partners = 0;
	}
	foodShow();
     }
    
	
}
function foodShow() {
	if(energy <= 0){
		day++;
		zombieAttack++;
		energy = 100;
		food = food - 3 - partners;
		var lossFood = 3 + partners;
		document.getElementById("OutPut").value="the day after,eat "+lossFood+" foods";
	}
	if(food <= 0 || health <= 0){
//		document.getElementById("btn3").onclick();

		if(health <= 0){
			health = 0;
		}
		else{
			food = 0;
		}
		alert("You Die!");
		document.getElementById("Check").value="new";
		document.getElementById("info_form").submit();
		state = 4;
		
	}
	
	document.getElementById("Food").value=food;
	document.getElementById("Health").value=health;
	document.getElementById("Day").value=day;
	document.getElementById("Partners").value=partners;
	document.getElementById("Energy").value=energy;
	document.getElementById("Attack").value=attack;
	document.getElementById("ZombieAttack").value=zombieAttack;
}