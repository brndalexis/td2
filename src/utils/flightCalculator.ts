import type { Planet } from "../Planet";
import { Starship } from "../Starship";

export function calculateFlightDurationFromEarth(planet : Planet, starship : Starship, unity : 'hours' | 'days'): number{
    if(planet.distanceFromEarth === 0){
        throw new Error("Le vaisseau se trouve déjà sur la Terre");
    }
const DureeVol = planet.distanceFromEarth / starship.speed;

if(unity === 'days'){
    return DureeVol/24;
}
return DureeVol;

}