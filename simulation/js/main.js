var mto=0.5;
var menu_score = 0;
var naoh = 25;
var sand = 50;
function dispmenu(val)
{
   val.classList.toggle("change");
  menu_score = menu_score+1;
  if(menu_score==1)
  {
    document.getElementById("navbar").setAttribute("style","display:block");
    document.getElementById("simulation-cont").setAttribute("style","opacity:0.5");
      if(mto!=1)
        document.getElementById("matwork").setAttribute("style","opacity:1");
    menu_score=-1;
    document.body.style.backgroundColor="black";
  }
  else
    {
      if(mto!=1)
        document.getElementById("matwork").setAttribute("style","opacity:10");
         document.body.style.backgroundColor="white";
          document.getElementById("simulation-cont").setAttribute("style","opacity:01");
      document.getElementById("navbar").setAttribute("style","display:none");
	  }
}

function sandSample()
{
	document.getElementById("simulation").innerHTML="<img src='images/sandSample.gif' width='50%'>";
	document.getElementById("sandSample").style.display = "none";
	setTimeout(() => {
	document.getElementById("unlockNuts").style.display = "block";
	}, 5000);
}

function unlockNuts()
{
	document.getElementById("simulation").innerHTML="<img src='images/unlockNuts.gif' width='30%'>";
	document.getElementById("unlockNuts").style.display = "none";
	setTimeout(() => {
	document.getElementById("putSand").style.display = "block";
	}, 6000);
}

function putSand()
{
	document.getElementById("simulation").innerHTML="<img src='images/putSand.gif' width='28%'>";
	document.getElementById("putSand").style.display = "none";
	setTimeout(() => {
	document.getElementById("relock").style.display = "block";
	}, 5000);
}

function relock()
{
	document.getElementById("simulation").innerHTML="<img src='images/relock.gif' width='30%'>";
	document.getElementById("relock").style.display = "none";
	setTimeout(() => {
	document.getElementById("stopWatch").style.display = "block";
	}, 4500);
}

function stopWatch()
{
	document.getElementById("simulation").innerHTML="<img src='images/agitation.gif' width='60%'>";
	document.getElementById("stopWatch").style.display = "none";
	setTimeout(() => {
	document.getElementById("unlock").style.display = "block";
	}, 5000);
}

function unlock()
{
	document.getElementById("simulation").innerHTML="<img src='images/unlock.gif' width='30%'>";
	document.getElementById("unlock").style.display = "none";
	setTimeout(() => {
	document.getElementById("weightTopSieve").style.display = "block";
	}, 6000);
}

function weightTopSieve()
{
	document.getElementById("simulation").innerHTML="<img src='images/weightTopSieve.gif' width='70%'>";
	document.getElementById("weightTopSieve").style.display = "none";
	setTimeout(() => {
	document.getElementById("weight850Sieve").style.display = "block";
	}, 5000);
}

function weight850Sieve()
{
	document.getElementById("simulation").innerHTML="<img src='images/weight850Sieve.gif' width='70%'>";
	document.getElementById("weight850Sieve").style.display = "none";
	setTimeout(() => {
	document.getElementById("weight600Sieve").style.display = "block";
	}, 5000);
}

function weight600Sieve()
{
	document.getElementById("simulation").innerHTML="<img src='images/weight600Sieve.gif' width='70%'>";
	document.getElementById("weight600Sieve").style.display = "none";
	setTimeout(() => {
	document.getElementById("weight425Sieve").style.display = "block";
	}, 5000);
}

function weight425Sieve()
{
	document.getElementById("simulation").innerHTML="<img src='images/weight425Sieve.gif' width='70%'>";
	document.getElementById("weight425Sieve").style.display = "none";
	setTimeout(() => {
	document.getElementById("weight300Sieve").style.display = "block";
	}, 5000);
}

function weight300Sieve()
{
	document.getElementById("simulation").innerHTML="<img src='images/weight300Sieve.gif' width='70%'>";
	document.getElementById("weight300Sieve").style.display = "none";
	setTimeout(() => {
	document.getElementById("weight212Sieve").style.display = "block";
	}, 5000);
}

function weight212Sieve()
{
	document.getElementById("simulation").innerHTML="<img src='images/weight212Sieve.gif' width='70%'>";
	document.getElementById("weight212Sieve").style.display = "none";
	setTimeout(() => {
	document.getElementById("weight150Sieve").style.display = "block";
	}, 5000);
}

function weight150Sieve()
{
	document.getElementById("simulation").innerHTML="<img src='images/weight150Sieve.gif' width='80%'>";
	document.getElementById("weight150Sieve").style.display = "none";
	setTimeout(() => {
	document.getElementById("weight106Sieve").style.display = "block";
	}, 5000);
}

function weight106Sieve()
{
	document.getElementById("simulation").innerHTML="<img src='images/weight106Sieve.gif' width='80%'>";
	document.getElementById("weight106Sieve").style.display = "none";
	setTimeout(() => {
	document.getElementById("weight75Sieve").style.display = "block";
	}, 5000);
}

function weight75Sieve()
{
	document.getElementById("simulation").innerHTML="<img src='images/weight75Sieve.gif' width='80%'>";
	document.getElementById("weight75Sieve").style.display = "none";
	setTimeout(() => {
	document.getElementById("weight53Sieve").style.display = "block";
	}, 5000);
}

function weight53Sieve()
{
	document.getElementById("simulation").innerHTML="<img src='images/weight53Sieve.gif' width='80%'>";
	document.getElementById("weight53Sieve").style.display = "none";
	setTimeout(() => {
	document.getElementById("weightBottomSieve").style.display = "block";
	}, 6000);
}

function weightBottomSieve()
{
	document.getElementById("simulation").innerHTML="<img src='images/weightBottomSieve.gif' width='80%'>";
	document.getElementById("weightBottomSieve").style.display = "none";
	setTimeout(() => {
	document.getElementById("reading").style.display = "block";
	}, 5000);
}

function reading()
{
	document.getElementById("simulation").innerHTML="<img src='images/reading.gif' width='80%'>";
	document.getElementById("reading").style.display = "none";
	setTimeout(() => {
	document.getElementById("result").style.display = "block";
	}, 5000);
}

function result()
{
	document.getElementById("simulation").innerHTML="<img src='images/formula.jpg' width='70%'>";
	document.getElementById("result").style.display = "none";
}

function resetfun()
{
	alert("Simulation will get restart.");
	location.reload();
}