import {UserService} from './user.service';
import {getTestBed, TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {User} from '../model/user';
import {Subscriber} from 'rxjs';

describe('UserService', () => {

  let userService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService]
    });
    const injector: TestBed = getTestBed();
    userService = injector.get(UserService);
    httpMock = injector.get(HttpTestingController);
  });

  it('should be created', () => {
    // Arrange
    /*Arranged in beforeEach*/
    // Act
    const service: UserService = TestBed.get(UserService);
    // Assert
    expect(UserService).toBeDefined();
  });

  it('should call users() method', () => {
    // Arrange
    /*I don't think need to arrange abhi*/
    // Act
    const service: UserService = TestBed.get(UserService);
    const res = service.users();
    // Assert
    expect(service.users).toBeDefined();
  });

  it('should call addUser() method', () => {
    // Arrange
    /*Create dummy user entry*/
    const dummyUser = new User();
    // Act
    const res = userService.addUser(dummyUser);
    // Assert
    expect(userService.addUser).toBeDefined();
  });

  it('should call userById() method', () => {
    // Arrange
    /*Everything arranged in beforeEach*/
    // Act
    const res = userService.userById(2);
    // Assert
    expect(userService.userById).toBeDefined();
  });

  it('should call loadAll() method', () => {
    // Arrange
    /*check result to be of type Subscriber*/
    const test = jasmine.any(Subscriber);

    const expectedUsers = `[
    {
      'id';
    :
      1,
        'name';
    :
      'Leanne Graham',
        'username';
    :
      'Bret',
        'email';
    :
      'Sincere@april.biz',
        'address';
    :
      {
        'street';
      :
        'Kulas Light',
          'suite';
      :
        'Apt. 556',
          'city';
      :
        'Gwenborough',
          'zipcode';
      :
        '92998-3874',
          'geo';
      :
        {
          'lat';
        :
          '-37.3159',
            'lng';
        :
          '81.1496';
        }
      }
    ,
      'phone';
    :
      '1-770-736-8031 x56442',
        'website';
    :
      'hildegard.org',
        'company';
    :
      {
        'name';
      :
        'Romaguera-Crona',
          'catchPhrase';
      :
        'Multi-layered client-server neural-net',
          'bs';
      :
        'harness real-time e-markets';
      }
    }
  ,
    {
      'id';
    :
      2,
        'name';
    :
      'Ervin Howell',
        'username';
    :
      'Antonette',
        'email';
    :
      'Shanna@melissa.tv',
        'address';
    :
      {
        'street';
      :
        'Victor Plains',
          'suite';
      :
        'Suite 879',
          'city';
      :
        'Wisokyburgh',
          'zipcode';
      :
        '90566-7771',
          'geo';
      :
        {
          'lat';
        :
          '-43.9509',
            'lng';
        :
          '-34.4618';
        }
      }
    ,
      'phone';
    :
      '010-692-6593 x09125',
        'website';
    :
      'anastasia.net',
        'company';
    :
      {
        'name';
      :
        'Deckow-Crist',
          'catchPhrase';
      :
        'Proactive didactic contingency',
          'bs';
      :
        'synergize scalable supply-chains';
      }
    }
  ]`
    ;

    // Act
    const res = userService.loadAll();
    // Assert
    expect(userService.loadAll).toBeDefined();

    if (expect(res) instanceof Subscriber) {
      return;
    }
    expect(userService.dataStore.users).toBeDefined();
    const req = httpMock.expectOne(`${userService.url}`);
    expect(req.request.method).toBe('GET');
    req.flush(expectedUsers);

  });

});
