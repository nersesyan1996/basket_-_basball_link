


let inp22 = document.querySelector('.inp22')
let btnsub = document.querySelector('.submit')
let btnsub2 = document.querySelector('.submit2')
let resName = document.querySelector('.redDiv')
//////////////////////////////////////////////////////////////
let finishResult=(str)=> {
let somenewarr = []
let srtLengt=str.length
for (let i = 0; i <srtLengt; i++) {
  let a = str[0].split(':')
  somenewarr.push(a[1],':',a[0])
  str.shift()
  }
let finishRes =''
let somenewarrleng = somenewarr.length/3
 for (let i = 0; i < somenewarrleng; i++) {
   
    finishRes += somenewarr[i]+somenewarr[i+1]+somenewarr[i+2]+','
    somenewarr.splice(0, 2);

 }
    // console.log(finishRes);

 return finishRes
}
/////////////////////////////////////////////////////////////
let strFunction=(worder)=> {
  let plus =''
  let curntRes = document.querySelector('.curntRes')
  for (let i = 0; i < worder.length; i++) {
    
    curntRes.innerHTML = `${worder[worder.length/2]}:${worder[0]}` // verchnakana hashiv

    if (worder[i]=='x') {
      worder.splice(i, 1,'X');// ete rezultati mech ka poqratar X sarquma mecatar
    }
    
  }
console.log(plus);

   worder.splice(0, 1); //jnjuma 1 element@
   worder.splice(worder.length / 2, 1);//kisuma mer naxnakan zangvac@

  let str = [];

  for (let i = 0; i < worder.length + i; i++) {
    str.push(worder[0] + ":" + worder[worder.length / 2]);
    worder.splice(0, 1);
    worder.splice(worder.length / 2, 1);
  }
  //ete uzum enq verchin 2 hat@ demic lini----------------
  // str.unshift(str[str.length - 1]);
  // str.unshift(str[str.length - 2]);
  // str.splice(str.length - 2, 2);
  
  // document.querySelector(".redDiv").innerHTML =`(${str[0]})`

  
  // str.shift()
  // console.log(str);
  return str
}
/////////////////////////////////////////////////////////////

let fnfnfnf = (worder) => {
  
let str = strFunction(worder)
let finishRes= finishResult(str)

 let asd=   finishRes.substring(0, finishRes.length - 1);
    btnsub2.addEventListener('click',()=>{
      asd+=',0:0'
    console.log(asd);
    document.querySelector(".res").innerHTML =`(${asd})`

    })
document.querySelector(".res").innerHTML =`(${asd})`

};

/////////////////////////////////////////////////////////////

let filterFunction = ()=>{
  const worder22 = inp22.value.split(" ")//inputic stacvac valun sarquma zangvac
  // const res = worder22.filter((v)=>{
  //   if (!isNaN(v)!=='string'|| v!=='x' || v!=='X') {
  //     console.log(v);
  //     return v 
  //   }
  // })
  // console.log(worder22);

  const worder = worder22.filter((v)=>{
   
      if  (!isNaN(v) || v==='x' || v==='X' ) {
      return v 
    }
  })
fnfnfnf(worder)
}
/////////////////////////////////////////////////////////////

btnsub.addEventListener('click',(e)=>{
    

    filterFunction()

    inp22.value = "";

})

inp22.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {

    
  filterFunction();

    inp22.value = "";

  }
});


// basket res revers----------------------------------------------------------------------

      let submit = document.querySelector(".submit3");
      function reversfunc() {
        let a = inp22.value;

        let n = a.replace("(", "");

        let b = n.replace(")", "");

        let c = b.replace(",", ":");

        let d = c.replace(",", ":");

        let e = d.replace(",", ":");

        let f = e.replace(",", ":");

        let dataArr = f.split(":");

        let erkarutyun = dataArr.length;
        let result = document.querySelector(".result");
        // (61:57,63:42,70:54,65:41,65:41)
        switch (erkarutyun) {
          case 10:
            result.innerHTML = `(${dataArr[1]}:${dataArr[0]},${dataArr[3]}:${dataArr[2]},${dataArr[5]}:${dataArr[4]},${dataArr[7]}:${dataArr[6]},${dataArr[9]}:${dataArr[8]})`;
            break;
          case 8:
            result.innerHTML = `(${dataArr[1]}:${dataArr[0]},${dataArr[3]}:${dataArr[2]},${dataArr[5]}:${dataArr[4]},${dataArr[7]}:${dataArr[6]})`;

            break;
          case 6:
            result.innerHTML = `(${dataArr[1]}:${dataArr[0]},${dataArr[3]}:${dataArr[2]},${dataArr[5]}:${dataArr[4]})`;
            break;
          case 4:
            result.innerHTML = `(${dataArr[1]}:${dataArr[0]},${dataArr[3]}:${dataArr[2]})`;
            break;
          case 2:
            result.innerHTML = `(${dataArr[1]}:${dataArr[0]})`;

            break;
          default:
            alert("SXAL");
        }
      }
      submit.addEventListener("click", () => {
        reversfunc();
        inp22.value = ''
      });