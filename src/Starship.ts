import { StarshipStatus } from "./StarshipStatus";
import { v4 as uuidv4 } from 'uuid';
import validator from 'validator';

export class Starship{
    ref : string;
    speed : number;
    status : StarshipStatus;
    id : string;

    constructor(ref: string, speed: number, id?: string) {
        this.ref = ref;
        this.speed = speed;
        this.status = StarshipStatus.PARKED;
        if (id) {
            if (!validator.isUUID(id, 4)) {
              throw new Error("L'ID fourni n'est pas valide");
            }
            this.id = id;
          } else {
            this.id = uuidv4();
          }
    }
    takeOff() {
        if (this.status !== StarshipStatus.PARKED) {
          throw new Error("Un avion qui n'est pas stationné ne peut pas s'envoler.");
        }
        this.status = StarshipStatus.TAKING_OFF;
        console.log(`${this.ref} est entrain de décoller`);
    
        this.status = StarshipStatus.FLYING;
        console.log(`${this.ref} est en vol`);
    }
    park() {
        if (this.status !== StarshipStatus.FLYING) {
          throw new Error("Un vaisseau qui n'est pas en vol ne peut pas se stationner.");
        }
        this.status = StarshipStatus.LANDING;
        console.log(`${this.ref} est en cours d'atterrissage`);
          this.status = StarshipStatus.PARKED;
          console.log(`${this.ref} est stationné`);
      }
    
      fly() {
        if (this.status !== StarshipStatus.FLYING) {
          throw new Error("Un vaisseau qui n'est pas en vol ne peut pas voler.");
        }
        console.log(`${this.ref} est déjà en vol à une vitesse de ${this.speed} km/h.`);
      }
    
      land() {
        if (this.status !== StarshipStatus.FLYING) {
          throw new Error("Un vaisseau qui n'est pas en vol ne peut pas atterrir.");
        }
        this.park();
      }
    }
