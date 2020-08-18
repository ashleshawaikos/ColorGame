
var colors=generateRandomColors(6); 
var squares=document.querySelectorAll(".square");
var messageDisplay=document.querySelector("#message");
var pickedColor=pickColor();
var colorDisplay=document.getElementById("colorDisplay");
colorDisplay.textContent=pickedColor;
var h1=document.querySelector("h1");
var resetBtn=document.querySelector("#reset");
var easybtn=document.querySelector("#easyBtn");
var hardbtn=document.querySelector("#hardBtn");
var numSquares=6;
var modeBtns=document.querySelectorAll(".mode");

for (var i = 0; i<modeBtns.length; i++) 
{
	modeBtns[i].addEventListener("click",function()
	{
		modeBtns[0].classList.remove("selected");
		modeBtns[1].classList.remove("selected");
		this.classList.add("selected");

		this.textContent==="Easy"? numSquares=3:numSquares=6;
		reset();

	});
	
}

function reset()
{
	colors=generateRandomColors(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++)
	{
			//add initial colors
		if(colors[i])
		{
			squares[i].style.display="block";
			squares[i].style.background=colors[i];
		}
		else
		{
			squares[i].style.display="none";
		}
		
	}
	h1.style.background="steelblue";
	resetBtn.textContent="New Colors";
	messageDisplay.textContent="";

}


resetBtn.addEventListener("click",function()
{
	reset();

});

for(var i=0;i<squares.length;i++)
{
	//add initial colors
	squares[i].style.background=colors[i];
	//add click listeners
	squares[i].addEventListener("click",function(){
		var clickedColor=this.style.background;
		if (clickedColor===pickedColor)
		{
			messageDisplay.textContent="Correct!";
			changeColors(clickedColor);
			resetBtn.textContent="Play Again?";
		}
		else{
			this.style.background="#232323";
			messageDisplay.textContent="Try Again";
		}
	});
}


function changeColors(color){
	for(var i=0;i<colors.length;i++)
	{
		squares[i].style.background= color;
	}
	h1.style.background=color;
}

function pickColor()
{
	var random =Math.floor(Math.random()* colors.length );
	return colors[random];
}

function generateRandomColors(num)
{
	var arr=[];
	for (var i = 0; i <num; i++)
	{
		arr.push(randomColor());
	}
	console.log(arr);
	return arr;
} 

function randomColor()
{
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);

	var finalColor="rgb(" +r+", "+g+", "+b+")";
	return finalColor;
}