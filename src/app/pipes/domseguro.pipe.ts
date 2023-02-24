import { Pipe, PipeTransform, ɵSafeResourceUrl } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
    name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

    constructor(private _domSanitizer: DomSanitizer) {
    }

    transform(value: string): ɵSafeResourceUrl {
        return this._domSanitizer.bypassSecurityTrustResourceUrl(value);
    }

}
