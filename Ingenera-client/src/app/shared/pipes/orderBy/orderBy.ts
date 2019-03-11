import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'orderBy' })
export class OrderBy implements PipeTransform {
    transform(
        list: Array<string>,
        sortingProperty: string,
        sortingDirection: string = '1'
    ): Array<string> {
        return list.sort((a: any, b: any) => {
            return (
                (a[sortingProperty] < b[sortingProperty] ? -1 : 1) *
                Number.parseInt(sortingDirection)
            );
        });
    }
}
