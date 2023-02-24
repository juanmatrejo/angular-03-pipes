// import { ValueTransformer } from '@angular/compiler/src/util';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

    transform(value: string, allWords: boolean = false): string {

        value = value.toLowerCase();
        let names: string[] = value.split(' ');

        if (allWords) {
            names = names.map(name => {
                name = name[0].toUpperCase() + name.substr(1).toLowerCase();
                return name;
            });
        }
        else {
            names[0] = names[0][0].toUpperCase() + names[0].substr(1).toLowerCase();
        }
        return names.join(' ');
    }
}
