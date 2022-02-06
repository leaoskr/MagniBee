let x = 20;

window.onload = () => {
   const button = document.createElement('button');
   button.id = "searchButton";
   button.textContent = "Magnify"

   button.style["background-color"] = "#b0da9b";

   const searchbar = document.createElement('input');
   searchbar.id = "searchbar";
   
   const slider = document.createElement('input');
   slider.id = "fontsize";
   slider.type = 'range';
   slider.min = 1;
   slider.max = 100;
   slider.value = 20;

   const temp = document.createElement('SPAN');
   temp.id = "fontvalue";

   document.querySelector("#test").append(searchbar);
   document.querySelector("#test").append(button);
   document.querySelector("#test").append(slider);
   document.querySelector("#test").append(temp);

   button.addEventListener('click', () => magnifyText());

   temp.appendChild(document.createTextNode(slider.value));
   
   slider.oninput = function() {
     temp.innerHTML = this.value;
     x = this.value;
   }

}

function magnifyText(){
    const p = document.getElementById("p");
    console.log("MagniBeeeeeee");
    let input = document.getElementById("searchbar").value;
    
    x = x.toString();
    y = "<p style='font-size:";
    z = "pt;'>$&</p >";

    if(input !== ""){
            let regExp = new RegExp(input , "gi")
            p.innerHTML = (p.textContent).replace(regExp, y+x+z);
    }
}



