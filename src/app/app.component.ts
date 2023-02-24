import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    name: string = 'Juan Manuel Trejo Espinoza';
    myArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    PI: number = Math.PI;
    percentage: number = 0.56789;
    salary: number = 5.67890123;
    myDate: Date = new Date();
    myLanguage: string = 'es-MX';
    nameUnCapital: string = 'juAn maNUEl tREjo eSpInoZa';
    video: string = 'https://www.youtube.com/embed/HKWqzjQAv14';
    lbHidePassword: string = 'Hide';
    valueHidePassword: boolean = false;

    person: any = {
        name: 'Juan Manuel Trejo Espinoza',
        age: 41,
        genre: 'Male',
        dateBirth: '11-Mar-1980',
        address: {
            street: 'Real de Atizapan',
            number: 3,
            City: 'Ciudad Lopez Mateos',
            County: 'Atizapan de Zaragoza',
            ZipCode: '52900',
            State: 'Estado de México',
            Country: 'México'
        }
    };

    myPromise = new Promise<string>((resolve) => {
        setTimeout(() => {
            resolve('Data has come!!');
        }, 3500);
    });

    doHidePassword() {
        this.valueHidePassword = !this.valueHidePassword;

        if (this.valueHidePassword) {
            this.lbHidePassword = 'Show';
        }
        else {
            this.lbHidePassword = 'Hide';
        }
    }
}
