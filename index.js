  newSketch(16);
    
  function newSketch(grid){
      
      var grids=grid*grid;
    for (let i=0;i<grids; i++) {
    div = document.createElement('div');
    let hw = 480/grid-1;
    div.style.height=hw+"px";
    div.style.width=hw+'px';
    container= document.getElementById('bigDiv');
    var cssArg = "repeat("+grid+",auto"
    console.log(cssArg);
    container.style.gridTemplateColumns= cssArg;


        div.classList.add("gridItems");
    document.getElementById('bigDiv').appendChild(div);}
    var byClass= document.getElementsByClassName('gridItems');
    var sliders = [].slice.call(document.getElementsByClassName("gridItems"));
      sliders.forEach(function (element, index){
      element.addEventListener("mouseover", function(){
      element.classList.remove('gridItems');
      element.classList.add('hover');
      element.style.background=
'#'+Math.floor(Math.random()*16777215).toString(16)
  });
});
  }
  
 var createNew= document.getElementById('btn_new');
 createNew.addEventListener('click', function() {

     var size = prompt("Density: ","16");
     const elements = document.getElementsByClassName("hover");

while (elements.length > 0) elements[0].remove();
const elements1 = document.getElementsByClassName("gridItems");
while (elements1.length > 0) elements1[0].remove();

     newSketch(size);
     let dirts= [].slice.call(document.getElementsByClassName('hover'));
     dirts.forEach(function (element, index){
         
 })
    });
   
