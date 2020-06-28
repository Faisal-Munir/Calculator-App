// // function clickbtn(){
// //     alert("click")
// // }

function clickbtn(num){
    
    var result = document.getElementById("result");
    result.value +=num;
    

}


function clearbtn(num){
    
    var result = document.getElementById("result");
    result.value ="";
    

}

function getresult(){
    var result = document.getElementById("result");
    result.value=eval(result.value);
}

// function parain(){
//     var para=document.getElementById("para");
//     para.innerHTML = "para one"
// }

// parain()

