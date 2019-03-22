import { Pipe, PipeTransform } from '@angular/core';
import {Address} from '../usermanager/model/address';

@Pipe({
    name: 'getAddress'
})
export class AddressString implements PipeTransform {
    transform(value: Address): string {
        return value.street + ' , ' + value.suite + ' , ' + value.city + ' , ' + value.zipcode;
    }

}
