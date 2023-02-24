import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'hidePassword'
})
export class HidePasswordPipe implements PipeTransform {

    transform(value: string, hide: boolean): string {

        if (!hide) {
            return value;
        }

        let chars = value.split('');
        chars = chars.map(char => {
            char = '*';
            return char;
        });

        return chars.join('');
    }

}
