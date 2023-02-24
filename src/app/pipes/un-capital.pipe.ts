import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'unCapital'
})
export class UnCapitalPipe implements PipeTransform {

    transform(value: string, separator: string, uppercaseAll: boolean = false): string {

        let char: string;
        let isSpace: boolean=true;
        let result: string = '';

        for (let idx: number = 0; idx < value.length; idx++) {

            char = value.substring(idx, idx + 1);

            if (char == ' ') {
                isSpace = true;
                result += separator;
            }
            else {
                if (isSpace) {
                    if (uppercaseAll) {
                        result += char.toLowerCase();
                    }
                    else {
                        result += char.toUpperCase();
                    }
                }
                else {
                    if (uppercaseAll) {
                        result += char.toUpperCase();
                    }
                    else {
                        result += char.toLowerCase();
                    }
                }
                isSpace = false;
            }
        }
        return result;
    }
}
