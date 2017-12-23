var timeLabel = document.getElementById("timer");
var totalSeconds = 0;
var gameStart = document.getElementById("gameB");
var btns = document.getElementsByClassName('game');
var imgs = document.getElementsByClassName('img');
var counter = 40;
var countLabel = document.getElementById("counter");
var bStart = false;
var firstChoice = true;
var won = false;
var bombcount = 0;
var lost = false;//setBombs;
var checker = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
var visited = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];//0 means not visited;
var butCheck = 0;
for(var i = 0; i < 16; i++){
	for(var j = 0; j< 16; j++){
		checker[i][j] = butCheck;
		visited[i][j] = 0;
		butCheck++;
	}
}
console.log(checker);
var array1 = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
function ran(){
	var num= Math.round(Math.random()*10) + 1;
	return num;
}

	var bombs = 40;
	for(var i = 0; i < 16; i++){
		for(var j = 0; j< 16; j++){
			if(bombs > 20 && i < 8){
				var x = Math.round(Math.random()*10) + 1;
				if(x< 4){
					array1[i][j] = 1; //1 is bomb 0 is no bomb
					bombs --;
				}
				else 
					array1[i][j] = 0;
			}
			else if(bombs > 0 && i > 7){
				var x = Math.round(Math.random()*10) + 1;
				if(x< 3){
					array1[i][j] = 1; //1 is bomb 0 is no bomb
					bombs --;
				}
				else 
					array1[i][j] = 0;
			}
			else
				array1[i][j] = 0;
			
		}
	}


console.log(array1);
var array2 = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];

for(var i = 0; i < 16; i++){
	for(var j = 0; j< 16; j++){
		var c = 0;
		if(array1[i][j] == 1)
			array2[i][j] = 'B';
		else{
			if(i == 0 && j == 0){
				if(array1[i][j+1]==1 )
					c++;
				if(array1[i+1][j+1] ==1)
					c++;
				if(array1[i+1][j] ==1)
					c++;
			}
			else if(i == 0 && j ==15){
				if(array1[i][j-1]==1 )
					c++;
				if(array1[i+1][j-1] ==1)
					c++;
				if(array1[i+1][j] ==1)
					c++;
			}
			else if(i == 15 && j ==0){
				if(array1[i][j+1]==1 )
					c++;
				if(array1[i-1][j+1] ==1)
					c++;
				if(array1[i-1][j] ==1)
					c++;
			}
			else if(i == 15 && j ==15){
				if(array1[i][j-1]==1 )
					c++;
				if(array1[i-1][j-1] ==1)
					c++;
				if(array1[i-1][j] ==1)
					c++;
			}
			else if(i == 0){
				if(array1[i][j-1]==1 )
					c++;
				if(array1[i+1][j-1] ==1)
					c++;
				if(array1[i+1][j] ==1)
					c++;
				if(array1[i][j+1] ==1)
					c++;
				if(array1[i+1][j+1] == 1)
					c++;
			}
			else if( j == 0){
				if(array1[i][j+1]==1 )
					c++;
				if(array1[i-1][j] ==1)
					c++;
				if(array1[i+1][j] ==1)
					c++;
				if(array1[i-1][j+1] ==1)
					c++;
				if(array1[i+1][j+1] == 1)
					c++;
			} 
			else if(i == 15){
				if(array1[i][j-1]==1 )
					c++;
				if(array1[i-1][j-1] ==1)
					c++;
				if(array1[i-1][j] ==1)
					c++;
				if(array1[i][j+1] ==1)
					c++;
				if(array1[i-1][j+1] == 1)
					c++;
			}
			else if(j == 15){
				if(array1[i][j-1]==1 )
					c++;
				if(array1[i-1][j] ==1)
					c++;
				if(array1[i+1][j] ==1)
					c++;
				if(array1[i-1][j-1] ==1)
					c++;
				if(array1[i+1][j-1] == 1)
					c++;
			}
			else{
				
				if(array1[i][j-1] == 1){
					c++;
				}
				if(array1[i][j+1] == 1){
					c++;
				}
				if(array1[i-1][j] == 1){
					c++;
				}
				if(array1[i+1][j] == 1){
					c++;
				}
				if(array1[i+1][j-1] == 1){
					c++;
				}
				if(array1[i-1][j+1] == 1){
					c++;
				}
				if(array1[i+1][j+1] == 1){
					c++;
				}
				if(array1[i-1][j-1] == 1){
					c++;
				}
			}
			array2[i][j] = c;
		}
	}
}


console.log(array2);
for(var i = 0; i< btns.length; i++){
	btns[i].addEventListener("click", setButton);
}
for(var i = 0; i< btns.length; i++){
	btns[i].addEventListener("click", gamePlay(i));
}

gameStart.addEventListener("click",resetGame); 
function setButton(){
	bStart = true;
}
setInterval(setTime, 1000);	


function setTime(){
	if(bStart){
		++totalSeconds;
		timeLabel.innerHTML = pad(totalSeconds);
	}
}
			
function pad(val){
	var valString = val + "";
	if(valString.length < 2)
	{
		return "0" + valString + " seconds";
	}
	else
	{
		return valString + " seconds";
	}
}
 //remove the right click menu from the page, remember bubble up, so the button doesnt need to prevent the menu also.
 document.addEventListener('contextmenu', function (e) {
	e.preventDefault()
});

for(var i=0; i< btns.length; i++) {
	btns[i].addEventListener("contextmenu", rightClick);
}

        //when the button is right clicked on the button, change the flag. 
 function rightClick(e) {
    if (e.target.src == "flag.png") {
        e.target.src = "normal.png";
		//e.target.src = "normal.png";
		counter++;
		countLabel.innerHTML = pad2(counter);
		
    } else {
        e.target.src = "flag.png";
		//e.target.src = "flag.png";
		counter--;
		countLabel.innerHTML = pad2(counter);
	}
}
function pad2(val){
	var valCount = val + "";
	if(valCount.length < 2)
	{
		return "0" + valCount ;
	}
	else
	{
		return valCount;
	}
}

function resetGame(){
	bStart = false;
	counter = 40;
	totalSeconds = 0;
	countLabel.innerHTML = pad2(counter);
	timeLabel.innerHTML = pad(totalSeconds);
	firstChoice = true;
	won = false;
	lost = false;
	bombcount =0;
	for(var i =0 ; i < btns.length ; i++)
		btns[i].childNodes[0].src = 'normal.png';
	for(var n = 0; n< 16; n++){
		for(var k = 0; k< 16; k++){
			visited[n][k] = 0;
		}
	}
	var bombs = 40;
	for(var i = 0; i < 16; i++){
		for(var j = 0; j< 16; j++){
			if(bombs > 20 && i < 8){
				var x = Math.round(Math.random()*10) + 1;
				if(x< 4){
					array1[i][j] = 1; //1 is bomb 0 is no bomb
					bombs --;
				}
				else 
					array1[i][j] = 0;
			}
			else if(bombs > 0 && i > 7){
				var x = Math.round(Math.random()*10) + 1;
				if(x< 3){
					array1[i][j] = 1; //1 is bomb 0 is no bomb
					bombs --;
				}
				else 
					array1[i][j] = 0;
			}
			else
				array1[i][j] = 0;
			
		}
	}
	for(var i = 0; i < 16; i++){
		for(var j = 0; j< 16; j++){
			var c = 0;
			if(array1[i][j] == 1)
				array2[i][j] = 'B';
			else{
				if(i == 0 && j == 0){
					if(array1[i][j+1]==1 )
						c++;
					if(array1[i+1][j+1] ==1)
						c++;
					if(array1[i+1][j] ==1)
						c++;
				}
				else if(i == 0 && j ==15){
					if(array1[i][j-1]==1 )
						c++;
					if(array1[i+1][j-1] ==1)
						c++;
					if(array1[i+1][j] ==1)
						c++;
				}
				else if(i == 15 && j ==0){
					if(array1[i][j+1]==1 )
						c++;
					if(array1[i-1][j+1] ==1)
						c++;
					if(array1[i-1][j] ==1)
						c++;
				}
				else if(i == 15 && j ==15){
					if(array1[i][j-1]==1 )
						c++;
					if(array1[i-1][j-1] ==1)
						c++;
					if(array1[i-1][j] ==1)
						c++;
				}
				else if(i == 0){
					if(array1[i][j-1]==1 )
						c++;
					if(array1[i+1][j-1] ==1)
						c++;
					if(array1[i+1][j] ==1)
						c++;
					if(array1[i][j+1] ==1)
						c++;
					if(array1[i+1][j+1] == 1)
						c++;
				}
				else if( j == 0){
					if(array1[i][j+1]==1 )
						c++;
					if(array1[i-1][j] ==1)
						c++;
					if(array1[i+1][j] ==1)
						c++;
					if(array1[i-1][j+1] ==1)
						c++;
					if(array1[i+1][j+1] == 1)
						c++;
				} 
				else if(i == 15){
					if(array1[i][j-1]==1 )
						c++;
					if(array1[i-1][j-1] ==1)
						c++;
					if(array1[i-1][j] ==1)
						c++;
					if(array1[i][j+1] ==1)
						c++;
					if(array1[i-1][j+1] == 1)
						c++;
				}
				else if(j == 15){
					if(array1[i][j-1]==1 )
						c++;
					if(array1[i-1][j] ==1)
						c++;
					if(array1[i+1][j] ==1)
						c++;
					if(array1[i-1][j-1] ==1)
						c++;
					if(array1[i+1][j-1] == 1)
						c++;
				}
				else{
					
					if(array1[i][j-1] == 1){
						c++;
					}
					if(array1[i][j+1] == 1){
						c++;
					}
					if(array1[i-1][j] == 1){
						c++;
					}
					if(array1[i+1][j] == 1){
						c++;
					}
					if(array1[i+1][j-1] == 1){
						c++;
					}
					if(array1[i-1][j+1] == 1){
						c++;
					}
					if(array1[i+1][j+1] == 1){
						c++;
					}
					if(array1[i-1][j-1] == 1){
						c++;
					}
				}
				array2[i][j] = c;
			}
		}
	}
	//setBombs;
}

function gamePlay(num){
	return function(){
		bombcount++;
		var n;
		var k;
		for(var a = 0; a < 16; a++){
			for(var b = 0; b< 16; b++){
				if(num == checker[a][b]){
					n = a;
					k = b;
				}
			}
		}
		if(firstChoice){
			if(array2[n][k] == 'B'){
				var i = n;
				var j = k;
				var c;
				if(i == 0 && j == 0){
					if(array1[i][j+1]==1 )
						c++;
					if(array1[i+1][j+1] ==1)
						c++;
					if(array1[i+1][j] ==1)
						c++;
				}
				else if(i == 0 && j ==15){
					if(array1[i][j-1]==1 )
						c++;
					if(array1[i+1][j-1] ==1)
						c++;
					if(array1[i+1][j] ==1)
						c++;
				}
				else if(i == 15 && j ==0){
					if(array1[i][j+1]==1 )
						c++;
					if(array1[i-1][j+1] ==1)
						c++;
					if(array1[i-1][j] ==1)
						c++;
				}
				else if(i == 15 && j ==15){
					if(array1[i][j-1]==1 )
						c++;
					if(array1[i-1][j-1] ==1)
						c++;
					if(array1[i-1][j] ==1)
						c++;
				}
				else if(i == 0){
					if(array1[i][j-1]==1 )
						c++;
					if(array1[i+1][j-1] ==1)
						c++;
					if(array1[i+1][j] ==1)
						c++;
					if(array1[i][j+1] ==1)
						c++;
					if(array1[i+1][j+1] == 1)
						c++;
				}
				else if( j == 0){
					if(array1[i][j+1]==1 )
						c++;
					if(array1[i-1][j] ==1)
						c++;
					if(array1[i+1][j] ==1)
						c++;
					if(array1[i-1][j+1] ==1)
						c++;
					if(array1[i+1][j+1] == 1)
						c++;
				} 
				else if(i == 15){
					if(array1[i][j-1]==1 )
						c++;
					if(array1[i-1][j-1] ==1)
						c++;
					if(array1[i-1][j] ==1)
						c++;
					if(array1[i][j+1] ==1)
						c++;
					if(array1[i-1][j+1] == 1)
						c++;
				}
				else if(j == 15){
					if(array1[i][j-1]==1 )
						c++;
					if(array1[i-1][j] ==1)
						c++;
					if(array1[i+1][j] ==1)
						c++;
					if(array1[i-1][j-1] ==1)
						c++;
					if(array1[i+1][j-1] == 1)
						c++;
				}
				else{
					if(array1[i][j-1] == 1){
						c++;
					}
					if(array1[i][j+1] == 1){
						c++;
					}
					if(array1[i-1][j] == 1){
						c++;
					}
					if(array1[i+1][j] == 1){
						c++;
					}
					if(array1[i+1][j-1] == 1){
						c++;
					}
					if(array1[i-1][j+1] == 1){
						c++;
					}
					if(array1[i+1][j+1] == 1){
						c++;
					}
					if(array1[i-1][j-1] == 1){
						c++;
					}
				}
				array2[i][j] = c;
			}
			firstChoice = false;
		}
		if(num == 0){
			if(array2[n][k] == 'B'){
				btns[num].childNodes[0].src = 'bomb.png';
				for(var i = 0; i< 16; i++){
					for(var j = 0; j< 16; j++){
						if(array2[i][j] == 'B')
							btns[checker[i][j]].childNodes[0].src = 'bomb.png';
					}
				}
				window.alert("You Lost");
				bStart = false;
				
			}
			else if(array2[n][k] > 0){
				if(array2[n][k] == 1)
					btns[num].childNodes[0].src = 'one.png';
				if(array2[n][k] == 2)
					btns[num].childNodes[0].src = 'two.png';
				if(array2[n][k] == 3)
					btns[num].childNodes[0].src = 'three.png';
				if(array2[n][k] == 4)
					btns[num].childNodes[0].src = 'four.png';
				if(array2[n][k] == 5)
					btns[num].childNodes[0].src = 'five.png';
				if(array2[n][k] == 6)
					btns[num].childNodes[0].src = 'six.png';
				if(array2[n][k] == 7)
					btns[num].childNodes[0].src = 'seven.png';
				if(array2[n][k] == 8)
					btns[num].childNodes[0].src = 'eight.png';
				visited[n][k] = 1;
			}
			else{
				btns[num].childNodes[0].src = "blank.png";
				visited[n][k] = 1;
				if(array2[n][k+1] != 'B' && visited[n][k+1] == 0)
					revealer(checker[n][k+1]);
				if(array2[n+1][k+1] != 'B' && visited[n+1][k+1] == 0)
					revealer(checker[n+1][k+1]);
				if(array2[n+1][k] != 'B' && visited[n+1][k] == 0)
					revealer(checker[n+1][k]);
			}
		}
		else if(num == 15){
			if(array2[n][k] == 'B'){
				btns[num].childNodes[0].src = 'bomb.png';
				for(var i = 0; i< 16; i++){
					for(var j = 0; j< 16; j++){
						if(array2[i][j] == 'B')
							btns[checker[i][j]].childNodes[0].src = 'bomb.png';
					}
				}
				window.alert("You Lost");
				bStart = false;
				
			}
			else if(array2[n][k] > 0){
				if(array2[n][k] == 1)
					btns[num].childNodes[0].src = 'one.png';
				if(array2[n][k] == 2)
					btns[num].childNodes[0].src = 'two.png';
				if(array2[n][k] == 3)
					btns[num].childNodes[0].src = 'three.png';
				if(array2[n][k] == 4)
					btns[num].childNodes[0].src = 'four.png';
				if(array2[n][k] == 5)
					btns[num].childNodes[0].src = 'five.png';
				if(array2[n][k] == 6)
					btns[num].childNodes[0].src = 'six.png';
				if(array2[n][k] == 7)
				btns[num].childNodes[0].src = 'seven.png';
				if(array2[n][k] == 8)
					btns[num].childNodes[0].src = 'eight.png';
				visited[n][k] = 1;
			}
			else{
				btns[num].childNodes[0].src = "blank.png";
				visited[n][k] = 1;
				if(array2[n][k-1] != 'B' && visited[n][k-1] == 0)
					revealer(checker[n][k-1]);
				if(array2[n+1][k-1] != 'B' && visited[n+1][k-1] == 0)
					revealer(checker[n+1][k-1]);
				if(array2[n+1][k] != 'B' && visited[n+1][k] == 0)
					revealer(checker[n+1][k]);
			}
		}
		else if(num == 240){
			if(array2[n][k] == 'B'){
				btns[num].childNodes[0].src = 'bomb.png';
				for(var i = 0; i< 16; i++){
					for(var j = 0; j< 16; j++){
						if(array2[i][j] == 'B')
							btns[checker[i][j]].childNodes[0].src = 'bomb.png';
					}
				}
				window.alert("You Lost");
				bStart = false;
				
			}
			else if(array2[n][k] > 0){
				if(array2[n][k] == 1)
					btns[num].childNodes[0].src = 'one.png';
				if(array2[n][k] == 2)
					btns[num].childNodes[0].src = 'two.png';
				if(array2[n][k] == 3)
					btns[num].childNodes[0].src = 'three.png';
				if(array2[n][k] == 4)
					btns[num].childNodes[0].src = 'four.png';
				if(array2[n][k] == 5)
					btns[num].childNodes[0].src = 'five.png';
				if(array2[n][k] == 6)
					btns[num].childNodes[0].src = 'six.png';
				if(array2[n][k] == 7)
					btns[num].childNodes[0].src = 'seven.png';
				if(array2[n][k] == 8)
					btns[num].childNodes[0].src = 'eight.png';
				visited[n][k] == 1;
			}
			else{
				btns[num].childNodes[0].src = "blank.png";
				visited[n][k] = 1;
				if(array2[n][k+1] != 'B' && visited[n][k+1] == 0)
					revealer(checker[n][k+1]);
				if(array2[n-1][k+1] != 'B' && visited[n-1][k+1] == 0)
					revealer(checker[n-1][k+1]);
				if(array2[n-1][k] != 'B' && visited[n-1][k] == 0)
					revealer(checker[n-1][k]);
			}
		}
		else if(num == 255){
			if(array2[n][k] == 'B'){
				btns[num].childNodes[0].src = 'bomb.png';
				for(var i = 0; i< 16; i++){
					for(var j = 0; j< 16; j++){
						if(array2[i][j] == 'B')
							btns[checker[i][j]].childNodes[0].src = 'bomb.png';
					}
				}
				window.alert("You Lost");
				
				bStart = false;
			}
			else if(array2[n][k] > 0){
				if(array2[n][k] == 1)
					btns[num].childNodes[0].src = 'one.png';
				if(array2[n][k] == 2)
					btns[num].childNodes[0].src = 'two.png';
				if(array2[n][k] == 3)
					btns[num].childNodes[0].src = 'three.png';
				if(array2[n][k] == 4)
					btns[num].childNodes[0].src = 'four.png';
				if(array2[n][k] == 5)
					btns[num].childNodes[0].src = 'five.png';
				if(array2[n][k] == 6)
					btns[num].childNodes[0].src = 'six.png';
				if(array2[n][k] == 7)
					btns[num].childNodes[0].src = 'seven.png';
				if(array2[n][k] == 8)
					btns[num].childNodes[0].src = 'eight.png';
				visited[n][k] = 1;
			}
			else{
				btns[num].childNodes[0].src = "blank.png";
				visited[n][k] = 1;
				if(array2[n][k-1] != 'B' && visited[n][k-1] == 0)
					revealer(checker[n][k-1]);
				if(array2[n-1][k-1] != 'B' && visited[n-1][k-1] == 0)
					revealer(checker[n-1][k-1]);
				if(array2[n-1][k] != 'B' && visited[n-1][k] == 0)
					revealer(checker[n-1][k]);
			}
		}
		else if(n == 0 && (k != 0 && k != 15)){
			if(array2[n][k] == 'B'){
				btns[num].childNodes[0].src = 'bomb.png';
				for(var i = 0; i< 16; i++){
					for(var j = 0; j< 16; j++){
						if(array2[i][j] == 'B')
							btns[checker[i][j]].childNodes[0].src = 'bomb.png';
					}
				}
				window.alert("You Lost");
				bStart = false;	
			}
			else if(array2[n][k] > 0){
				if(array2[n][k] == 1)
					btns[num].childNodes[0].src = 'one.png';
				if(array2[n][k] == 2)
					btns[num].childNodes[0].src = 'two.png';
				if(array2[n][k] == 3)
					btns[num].childNodes[0].src = 'three.png';
				if(array2[n][k] == 4)
					btns[num].childNodes[0].src = 'four.png';
				if(array2[n][k] == 5)
					btns[num].childNodes[0].src = 'five.png';
				if(array2[n][k] == 6)
					btns[num].childNodes[0].src = 'six.png';
				if(array2[n][k] == 7)
					btns[num].childNodes[0].src = 'seven.png';
				if(array2[n][k] == 8)
					btns[num].childNodes[0].src = 'eight.png';
				visited[n][k] =1;
			}
			else{
				btns[num].childNodes[0].src = "blank.png";
				visited[n][k] =1;
				if(array2[n][k-1] != 'B'|| visited[n][k-1] == 0)
					revealer(checker[n][ k-1]);
				if(array2[n+1][k-1] != 'B' && visited[n+1][k-1] == 0)
					revealer(checker[n+1][k-1]);
				if(array2[n+1][k] != 'B' && visited[n+1][k] == 0)
					revealer(checker[n+1][k]);
				if(array2[n+1][k+1] != 'B' && visited[n+1][k+1] == 0)
					revealer(checker[n+1][k+1]);
				if(array2[n][k+1] != 'B' && visited[n][k+1] == 0)
					revealer(checker[n][k+1]);
			}
		}
		else if(n == 15 && (k != 0 && k != 15)){
			if(array2[n][k] == 'B'){
				btns[num].childNodes[0].src = 'bomb.png';
				for(var i = 0; i< 16; i++){
					for(var j = 0; j< 16; j++){
						if(array2[i][j] == 'B')
							btns[checker[i][j]].childNodes[0].src = 'bomb.png';
					}
				}
				window.alert("You Lost");
				
				bStart = false;
			}
			else if(array2[n][k] > 0){
				if(array2[n][k] == 1)
					btns[num].childNodes[0].src = 'one.png';
				if(array2[n][k] == 2)
					btns[num].childNodes[0].src = 'two.png';
				if(array2[n][k] == 3)
					btns[num].childNodes[0].src = 'three.png';
				if(array2[n][k] == 4)
					btns[num].childNodes[0].src = 'four.png';
				if(array2[n][k] == 5)
					btns[num].childNodes[0].src = 'five.png';
				if(array2[n][k] == 6)
					btns[num].childNodes[0].src = 'six.png';
				if(array2[n][k] == 7)
					btns[num].childNodes[0].src = 'seven.png';
				if(array2[n][k] == 8)
					btns[num].childNodes[0].src = 'eight.png';
				visited[n][k] =1;
			}
			else{
				visited[n][k] = 1;
				btns[num].childNodes[0].src = "blank.png";
				if(array2[n][k-1] != 'B' && visited[n][k-1] == 0)
					revealer(checker[n][k-1]);
				if(array2[n-1][k-1] != 'B' && visited[n-1][k-1] == 0)
					revealer(checker[n-1][k-1]);
				if(array2[n-1][k] != 'B' && visited[n-1][k] == 0)
					revealer(checker[n-1][k]);
				if(array2[n-1][k+1] != 'B' && visited[n-1][k+1] == 0)
					revealer(checker[n-1][k+1]);
				if(array2[n][k+1] != 'B' && visited[n][k+1] == 0)
					revealer(checker[n][k+1]);
			}
		}
		else if(k == 0 && (n != 0 && n != 15)){
			if(array2[n][k] == 'B'){
				btns[num].childNodes[0].src = 'bomb.png';
				for(var i = 0; i< 16; i++){
					for(var j = 0; j< 16; j++){
						if(array2[i][j] == 'B')
							btns[checker[i][j]].childNodes[0].src = 'bomb.png';
					}
				}
				window.alert("You Lost");
				bStart = false;
			}
			else if(array2[n][k] > 0){
				if(array2[n][k] == 1)
					btns[num].childNodes[0].src = 'one.png';
				if(array2[n][k] == 2)
					btns[num].childNodes[0].src = 'two.png';
				if(array2[n][k] == 3)
					btns[num].childNodes[0].src = 'three.png';
				if(array2[n][k] == 4)
					btns[num].childNodes[0].src = 'four.png';
				if(array2[n][k] == 5)
					btns[num].childNodes[0].src = 'five.png';
				if(array2[n][k] == 6)
					btns[num].childNodes[0].src = 'six.png';
				if(array2[n][k] == 7)
					btns[num].childNodes[0].src = 'seven.png';
				if(array2[n][k] == 8)
					btns[num].childNodes[0].src = 'eight.png';
				visited[n][k] = 1;
			}	
			else{
				btns[num].childNodes[0].src = "blank.png";
				visited[n][k] = 1;
				if(array2[n][k+1] != 'B' && visited[n][k+1] == 0)
					revealer(checker[n][k+1]);
				if(array2[n-1][k] != 'B' && visited[n-1][k] == 0)
					revealer(checker[n-1][k]);
				if(array2[n+1][k] != 'B' && visited[n+1][k] == 0)
					revealer(checker[n+1][k]);
				if(array2[n-1][k+1] != 'B' && visited[n-1][k+1] == 0)
					revealer(checker[n-1][k+1]);
				if(array2[n+1][k+1] != 'B' && visited[n+1][k+1] == 0)
					revealer(checker[n+1][k+1]);
			}
		}
		else if(k == 15 && (n != 0 && n != 15)){
			if(array2[n][k] == 'B'){
				btns[num].childNodes[0].src = 'bomb.png';
				for(var i = 0; i< 16; i++){
					for(var j = 0; j< 16; j++){
						if(array2[i][j] == 'B')
							btns[checker[i][j]].childNodes[0].src = 'bomb.png';
					}
				}
				window.alert("You Lost");
				bStart = false;
				
			}
			else if(array2[n][k] > 0){
				if(array2[n][k] == 1)
					btns[num].childNodes[0].src = 'one.png';
				if(array2[n][k] == 2)
					btns[num].childNodes[0].src = 'two.png';
				if(array2[n][k] == 3)
					btns[num].childNodes[0].src = 'three.png';
				if(array2[n][k] == 4)
					btns[num].childNodes[0].src = 'four.png';
				if(array2[n][k] == 5)
					btns[num].childNodes[0].src = 'five.png';
				if(array2[n][k] == 6)
					btns[num].childNodes[0].src = 'six.png';
				if(array2[n][k] == 7)
					btns[num].childNodes[0].src = 'seven.png';
				if(array2[n][k] == 8)
					btns[num].childNodes[0].src = 'eight.png';
				visited[n][k] = 1;
			}
			else{
				btns[num].childNodes[0].src = "blank.png";
				visited[n][k] = 1;
				if(array2[n][k-1] != 'B' && visited[n][k-1] == 0)
					revealer(checker[n][k-1]);
				if(array2[n-1][k] != 'B' && visited[n-1][k] == 0)
					revealer(checker[n-1][k]);
				if(array2[n+1][k] != 'B' && visited[n+1][k] == 0)
					revealer(checker[n+1][k]);
				if(array2[n-1][k-1] != 'B' && visited[n-1][k-1] == 0)
					revealer(checker[n-1][k-1]);
				if(array2[n+1][k-1] != 'B' && visited[n+1][k-1] == 0)
					revealer(checker[n+1][k-1]);
			}
		}
		else{
			if(array2[n][k] == 'B'){
				btns[num].childNodes[0].src = 'bomb.png';
				for(var i = 0; i< 16; i++){
					for(var j = 0; j< 16; j++){
						if(array2[i][j] == 'B')
							btns[checker[i][j]].childNodes[0].src = 'bomb.png';
					}
				}
				window.alert("You Lost");
				bStart = false;
				
			}
			else if(array2[n][k] > 0){
				if(array2[n][k] == 1)
					btns[num].childNodes[0].src = 'one.png';
				if(array2[n][k] == 2)
					btns[num].childNodes[0].src = 'two.png';
				if(array2[n][k] == 3)
					btns[num].childNodes[0].src = 'three.png';
				if(array2[n][k] == 4)
					btns[num].childNodes[0].src = 'four.png';
				if(array2[n][k] == 5)
					btns[num].childNodes[0].src = 'five.png';
				if(array2[n][k] == 6)
					btns[num].childNodes[0].src = 'six.png';
				if(array2[n][k] == 7)
					btns[num].childNodes[0].src = 'seven.png';
				if(array2[n][k] == 8)
					btns[num].childNodes[0].src = 'eight.png';
				visited[n][k] = 1;
			}
			else{
				btns[num].childNodes[0].src = "blank.png";
				visited[n][k] = 1;
				if(array2[n][k-1] != 'B' && visited[n][k-1] == 0)
					revealer(checker[n][k-1]);
				if(array2[n-1][k] != 'B' && visited[n-1][k] == 0)
					revealer(checker[n-1][k]);
				if(array2[n+1][k] != 'B' && visited[n+1][k] == 0)
					revealer(checker[n+1][k]);
				if(array2[n-1][k-1] != 'B' && visited[n-1][k-1] == 0)
					revealer(checker[n-1][k-1]);
				if(array2[n+1][k-1] != 'B' && visited[n+1][k-1] == 0)
					revealer(checker[n+1][k-1]);
				if(array2[n][k+1] != 'B' && visited[n][k+1] == 0)
					revealer(checker[n][k+1]);
				if(array2[n+1][k+1] != 'B' && visited[n+1][k+1] == 0)
					revealer(checker[n+1][k+1]);
				if(array2[n-1][k+1] != 'B' && visited[n-1][k+1] == 0)
					revealer(checker[n-1][k+1]);
			}

		}
	}
}	
function revealer(num){
	var n;
	var k;
	for(var a = 0; a < 16; a++){
		for(var b = 0; b< 16; b++){
			if(num == checker[a][b]){
				n = a;
				k = b;
			}
		}
	}
	visited[n][k] = 1;
	bombcount++;
	if(array2[n][k] > 0){
		if(array2[n][k] == 1)
			btns[num].childNodes[0].src = 'one.png';
		if(array2[n][k] == 2)
			btns[num].childNodes[0].src = 'two.png';
		if(array2[n][k] == 3)
			btns[num].childNodes[0].src = 'three.png';
		if(array2[n][k] == 4)
			btns[num].childNodes[0].src = 'four.png';
		if(array2[n][k] == 5)
			btns[num].childNodes[0].src = 'five.png';
		if(array2[n][k] == 6)
			btns[num].childNodes[0].src = 'six.png';
		if(array2[n][k] == 7)
			btns[num].childNodes[0].src = 'seven.png';
		if(array2[n][k] == 8)
			btns[num].childNodes[0].src = 'eight.png';
	}
	else{
		if(array2[n][k] == 0)
			btns[num].childNodes[0].src = 'blank.png';
		if(n == 0 && k == 0){
				if(array2[n][k+1] != 'B' && visited[n][k+1] == 0)
					revealer(checker[n][k+1]);
				if(array2[n+1][k+1] != 'B' && visited[n+1][k+1] == 0)
					revealer(checker[n+1][k+1]);
				if(array2[n+1][k] != 'B' && visited[n+1][k] == 0)
					revealer(checker[n+1][k]);
		}
		else if(n == 15 && k == 0){
				if(array2[n][k+1] != 'B' && visited[n][k+1] == 0)
					revealer(checker[n][k+1]);
				if(array2[n-1][k+1] != 'B' && visited[n-1][k+1] == 0)
					revealer(checker[n-1][k+1]);
				if(array2[n-1][k] != 'B' && visited[n-1][k] == 0)
					revealer(checker[n-1][k]);
		}
		else if(n == 0 && k == 15){
				if(array2[n][k-1] != 'B' && visited[n][k-1] == 0)
					revealer(checker[n][k-1]);
				if(array2[n+1][k-1] != 'B' && visited[n+1][k-1] == 0)
					revealer(checker[n+1][k-1]);
				if(array2[n+1][k] != 'B' && visited[n+1][k] == 0)
					revealer(checker[n+1][k]);
		}
		else if(n == 15 && k == 15){
				if(array2[n][k-1] != 'B' && visited[n][k-1] == 0)
					revealer(checker[n][k-1]);
				if(array2[n-1][k-1] != 'B' && visited[n-1][k-1] == 0)
					revealer(checker[n-1][k-1]);
				if(array2[n-1][k] != 'B' && visited[n-1][k] == 0)
					revealer(checker[n-1][k]);
		}
		else if(n == 0 ){
				if(array2[n][k-1] != 'B'|| visited[n][k-1] == 0)
					revealer(checker[n][ k-1]);
				if(array2[n+1][k-1] != 'B' && visited[n+1][k-1] == 0)
					revealer(checker[n+1][k-1]);
				if(array2[n+1][k] != 'B' && visited[n+1][k] == 0)
					revealer(checker[n+1][k]);
				if(array2[n+1][k+1] != 'B' && visited[n+1][k+1] == 0)
					revealer(checker[n+1][k+1]);
				if(array2[n][k+1] != 'B' && visited[n][k+1] == 0)
					revealer(checker[n][k+1]);
		}
		else if(n == 15 ){
				if(array2[n][k-1] != 'B' && visited[n][k-1] == 0)
					revealer(checker[n][k-1]);
				if(array2[n-1][k-1] != 'B' && visited[n-1][k-1] == 0)
					revealer(checker[n-1][k-1]);
				if(array2[n-1][k] != 'B' && visited[n-1][k] == 0)
					revealer(checker[n-1][k]);
				if(array2[n-1][k+1] != 'B' && visited[n-1][k+1] == 0)
					revealer(checker[n-1][k+1]);
				if(array2[n][k+1] != 'B' && visited[n][k+1] == 0)
					revealer(checker[n][k+1]);
		}
		else if(k == 0){
				if(array2[n][k+1] != 'B' && visited[n][k+1] == 0)
					revealer(checker[n][k+1]);
				if(array2[n-1][k] != 'B' && visited[n-1][k] == 0)
					revealer(checker[n-1][k]);
				if(array2[n+1][k] != 'B' && visited[n+1][k] == 0)
					revealer(checker[n+1][k]);
				if(array2[n-1][k+1] != 'B' && visited[n-1][k+1] == 0)
					revealer(checker[n-1][k+1]);
				if(array2[n+1][k+1] != 'B' && visited[n+1][k+1] == 0)
					revealer(checker[n+1][k+1]);
		}
		else if(k == 15){
				if(array2[n][k-1] != 'B' && visited[n][k-1] == 0)
					revealer(checker[n][k-1]);
				if(array2[n-1][k] != 'B' && visited[n-1][k] == 0)
					revealer(checker[n-1][k]);
				if(array2[n+1][k] != 'B' && visited[n+1][k] == 0)
					revealer(checker[n+1][k]);
				if(array2[n-1][k-1] != 'B' && visited[n-1][k-1] == 0)
					revealer(checker[n-1][k-1]);
				if(array2[n+1][k-1] != 'B' && visited[n+1][k-1] == 0)
					revealer(checker[n+1][k-1]);
		}
		else{
				if(array2[n][k-1] != 'B' && visited[n][k-1] == 0)
					revealer(checker[n][k-1]);
				if(array2[n-1][k] != 'B' && visited[n-1][k] == 0)
					revealer(checker[n-1][k]);
				if(array2[n+1][k] != 'B' && visited[n+1][k] == 0)
					revealer(checker[n+1][k]);
				if(array2[n-1][k-1] != 'B' && visited[n-1][k-1] == 0)
					revealer(checker[n-1][k-1]);
				if(array2[n+1][k-1] != 'B' && visited[n+1][k-1] == 0)
					revealer(checker[n+1][k-1]);
				if(array2[n][k+1] != 'B' && visited[n][k+1] == 0)
					revealer(checker[n][k+1]);
				if(array2[n+1][k+1] != 'B' && visited[n+1][k+1] == 0)
					revealer(checker[n+1][k+1]);
				if(array2[n-1][k+1] != 'B' && visited[n-1][k+1] == 0)
					revealer(checker[n-1][k+1]);
		}
	}
	
}


	
	//for(var i = 0; i<16; i++){
		//for(var j = 0; j < 16; j++){
			//if((visited[i][j] == 1 )&& (array2[i][j] != 'B'))
			//	b++;
		//}
//	}
	if(bombcount == 216)
		won = true;
	if(won){
		window.alert("You won");
		bStart = false;
	}

