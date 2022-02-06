
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;



slider.oninput = function() {
  output.innerHTML = this.value;
  console.log(output);
  localStorage.setItem("key", output);
}


// let temp = this.value
// localStorage.setItem("key", temp);

//export const getTemp = () =>temp;

