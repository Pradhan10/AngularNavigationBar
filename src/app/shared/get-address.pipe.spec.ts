import {TestBed} from '@angular/core/testing';
import {AddressString} from './get-address.pipe';
import {Address} from '../usermanager/model/address';


describe('should check transform method of AddressString class', () => {

  it('transform should be called', () => {
    const addr = new AddressString();
    expect(addr.transform).toBeDefined();

    const testAddr: Address = {
      street: 'Some street',
      suite: 'some suite',
      city: 'some city',
      zipcode: 'some zipcode',
      geo: {
        lat: 'some lat',
        lng: 'some long',
      }
    };
    expect(addr.transform(testAddr)).toContain('Some street');
  });

});
