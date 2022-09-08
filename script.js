 
const buttonColor = document.querySelector("#button-random-color");
 let colors = document.querySelectorAll(".color")


 function createPalette (){
   

    for (let index = 1; index < colors.length; index++){

        let r = Math.floor(Math.random()*255);
        let g = Math.floor(Math.random()*255);
        let b = Math.floor(Math.random()*255);

        colors[index].style.backgroundColor = "rgb("+r+","+g+","+b+")";
    }
}
  
 buttonColor.addEventListener("click", createPalette)
