let url="http://universities.hipolabs.com/search?country=";
let btn=document.querySelector("button");


btn.addEventListener("click",async ()=>{
let country=document.getElementById("country").value;
getCollage(country);
console.log(country);
let colArr=await getCollage(country);
console.log(colArr);
show(colArr);

});

function show(colArr){
  let list=document.querySelector("#list");
  list.innerText="";
  for(let col of colArr){
    console.log(col.name);
    let li=document.createElement("li");
    li.innerText=col.name;
    list.appendChild(li);

 
  }

}

async function getCollage(country) {
 try{
   let res= await axios.get(url+country);
   return res.data;

 }
  catch(e){
    console.log("error : ",e);
    return [];
  }
}