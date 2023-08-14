function camelize(str){
  let arr = str.split('-');
  arr.forEach((item, index, array) => {
    arr[index]=arr[index].charAt(0).toUpperCase()+arr[index].slice(1);
  });
    if(str.at(0)!=='-'){
    arr[0]=arr[0].charAt(0).toLowerCase()+arr[0].slice(1);
  }
  return arr.join('');
}
let opc = prompt("Digite a expresão, para fazer o camelize: ");
alert(camelize(opc));