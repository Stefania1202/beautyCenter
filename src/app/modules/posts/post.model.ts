import { Salon } from '../salons/salon.model';

export class Post {

    public name: string; public uid: string;
    public description: string;
    public imagePath: string;
    public location: string; public city: string;
    // tslint:disable-next-line: max-line-length
    public serviciul1: string; public serviciul2: string; public serviciul3: string; public serviciul4: string; public serviciul5: string; public serviciul6: string;
    // tslint:disable-next-line: max-line-length
    public serviciul01: string; public serviciul02: string; public serviciul03: string; public serviciul04: string; public serviciul05: string; public serviciul06: string;
    // tslint:disable-next-line: max-line-length
    public serviciul11: string; public serviciul22: string; public serviciul33: string; public serviciul44: string; public serviciul55: string; public serviciul66: string;
    public pret1: string; public pret2: string; public pret3: string; public pret4: string; public pret5: string; public pret6: string;

    constructor( name: string, uid: string,
                 desc: string,
                 imagePath: string,
                 location: string, city: string,
                 serviciul1: string, serviciul2: string, serviciul3: string, serviciul4: string, serviciul5: string, serviciul6: string,
                 // tslint:disable-next-line: max-line-length
                 serviciul01: string, serviciul02: string, serviciul03: string, serviciul04: string, serviciul05: string, serviciul06: string,
                 // tslint:disable-next-line: max-line-length
                 serviciul11: string, serviciul22: string, serviciul33: string, serviciul44: string, serviciul55: string, serviciul66: string,
                 pret1: string, pret2: string, pret3: string, pret4: string, pret5: string, pret6: string ) {

        this.name = name; this.uid = uid;
        this.description = desc;
        this.imagePath = imagePath;
        this.location = location; this.city = city;
        // tslint:disable-next-line: max-line-length
        this.serviciul1 = serviciul1; this.serviciul2 = serviciul2; this.serviciul3 = serviciul3; this.serviciul4 = serviciul4; this.serviciul5 = serviciul5; this.serviciul6 = serviciul6;
        // tslint:disable-next-line: max-line-length
        this.serviciul01 = serviciul01; this.serviciul02 = serviciul02; this.serviciul03 = serviciul03; this.serviciul04 = serviciul04; this.serviciul05 = serviciul05; this.serviciul06 = serviciul06;
         // tslint:disable-next-line: max-line-length
        this.serviciul11 = serviciul11; this.serviciul22 = serviciul22; this.serviciul33 = serviciul33; this.serviciul44 = serviciul44; this.serviciul55 = serviciul55; this.serviciul66 = serviciul66;
        this.pret1 = pret1; this.pret2 = pret2; this.pret3 = pret3; this.pret4 = pret4; this.pret5 = pret5; this.pret6 = pret6;
        }
}
