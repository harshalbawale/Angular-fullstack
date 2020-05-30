let sportsOne: string[] = ["Golf","Cricket","Football","hockey"];
// for (let index = 0; index < sportsOne.length; index++) {
//     console.log(sportsOne[index]);
// }

for(let tempvar of sportsOne){
    if(tempvar == "Cricket"){
        console.log("My fevrate sport is "+tempvar);
    }else{
        console.log(tempvar);
    }
    
    
}