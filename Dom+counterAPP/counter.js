// featching element
const countValue=document.querySelector('#counter');

const increment=()=>{
    
    // here i got all data in string form because i m accesing all data with using innerText. suppose i want convert this into number so I'm using parseInt
    // parseInt convert string value into integer


    // get the value from UI
    let value=parseInt(countValue.innerText);
    
    // update the value
    value+=1;

 
    // set the value onto UI
    countValue.innerText=value;
    

}

const decrement=()=>{
    // get the value from UI
    let value=parseInt(countValue.innerText);

    // Update the value
    value-=1;

    // set the value into UI

    countValue.innerText=value

}