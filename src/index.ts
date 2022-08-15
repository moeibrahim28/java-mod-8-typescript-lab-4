function prepend() {
  // your code here
  let inputStrings: string = (<HTMLInputElement>document.getElementById("inputString")).value;
  let numSpacesString: string = (<HTMLInputElement>document.getElementById("numSpaces")).value;
  console.log(inputStrings);
  console.log(numSpacesString);
const inputStringArray = inputStrings.split(',');
const numSpacesArray = numSpacesString.split(',');

const arrOfNum = numSpacesArray.map(str => {
  return Number(str);
});

  console.log(inputStringArray);
  console.log(numSpacesArray);


let output:string = "";
let result:string = "";
if(inputStringArray.length === numSpacesArray.length){


for(let i=0;i<inputStringArray.length;i++){

let inputString = inputStringArray[i];
let numSpaces = arrOfNum[i];
console.log(numSpaces);
if(numSpaces!= null && inputString!= null){
let spaces: string ="";

  for(let x=0; x<numSpaces;x++){
  spaces = spaces + "&nbsp;";
  }
  result += spaces + inputString;
}
}
   output += "\"" + result + "\"";


   // Same as old Javascript
   let outputElement = document.getElementById("output");
   if (outputElement != null) {
       outputElement.innerHTML = output;
   }
}
}
