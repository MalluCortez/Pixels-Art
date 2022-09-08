 
const buttonColor = document.querySelector("#button-random-color");
 let colors = document.querySelectorAll(".variable")


 function createPalette (){
   const colorsPalette = [];

    for (let index = 0; index < colors.length; index++){

        let r = Math.floor(Math.random()*255);
        let g = Math.floor(Math.random()*255);
        let b = Math.floor(Math.random()*255);

        let boxColor = "rgb("+r+","+g+","+b+")"

        colors[index].style.backgroundColor = boxColor;

        colorsPalette.push(boxColor)
    }

    localStorage.setItem('colorsPalette', JSON.stringify(colorsPalette));

}
  
    buttonColor.addEventListener("click", createPalette)

  function saveColors () {
    let colorsPalette = localStorage.getItem("colorsPalette");

    for (i = 0; i < colorsPalette.length; i++) {

        colors[i].style.backgroundColor = JSON.parse(colorsPalette)[i];

    }
}

saveColors()   