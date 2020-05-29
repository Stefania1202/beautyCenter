import { Salon } from '../salons/salon.model';

export class Post {

    public name: string;
    public description: string;
    public imagePath: string;
    public salon: Salon[];

    constructor( name: string, desc: string, imagePath: string, salon: Salon[]) {

        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.salon = salon;
    }
}
