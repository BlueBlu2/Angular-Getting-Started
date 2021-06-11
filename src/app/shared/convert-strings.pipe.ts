import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'convertStrings'
})
export class ConvertStringsPipe implements PipeTransform {
    transform(value: string, strToFind: string, strToReplace: string): string {
        return value.replace(strToFind, strToReplace);
    }
}