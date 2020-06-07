import { Coach } from "./Coach";

export class CricketCoach implements Coach{
    getDailyWorkOut(): String {
        return "Practice your spin ball tec.";
    }

}