import { Coach } from "./Coach";

export class GolfCoach implements Coach{
    getDailyWorkOut(): String {
        return "practice in 20 yard ground";
    }

}