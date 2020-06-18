export class Salon {

    public firstname: string;
    public lastname: string;
    public mobile: string;
    public email: string;
    public message: string;



    constructor( firstname: string, lastname: string, mobile: string, email: string, message: string) {

        this.firstname = firstname;
        this.lastname = lastname;
        this.mobile = mobile;
        this.email = email;
        this.message = message;
    }
}
