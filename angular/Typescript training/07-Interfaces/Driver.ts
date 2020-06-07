import { CricketCoach } from "./CricketCoach";
import { GolfCoach } from "./GolfCoach";
import { Coach } from "./Coach";

let  myCricketCoach = new CricketCoach();
// console.log(myCricketCoach.getDailyWorkOut());

let myGolfCoach = new GolfCoach();
// console.log(myGolfCoach.getDailyWorkOut());

let theCoach: Coach[] = [];

theCoach.push(myCricketCoach);
theCoach.push(myGolfCoach);

for(let tempCoach of theCoach){
    console.log(tempCoach.getDailyWorkOut());
    
}