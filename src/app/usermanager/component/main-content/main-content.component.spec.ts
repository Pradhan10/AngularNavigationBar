import {MainContentComponent} from './main-content.component';
import {User} from '../../model/user';
import {Observable, of, Subject} from 'rxjs';
import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {UserService} from '../../services/user.service';
import {ActivatedRoute, Params} from '@angular/router';

describe('MainContentComponent', () => {
  let component: MainContentComponent;
  let mockActivatedRoute: ActivatedRoute;
  let mockUserService: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });

    mockActivatedRoute = jasmine.createSpyObj(['ngOnInit']);
    mockUserService = jasmine.createSpyObj(['users', 'addUser', 'userById', 'loadAll']);
    component = jasmine.createSpyObj(['ngOnInit', 'subscribeToUser', 'subscribeToParam']);

  });

  it('should be defined', () => {
    expect(component).toBeDefined();
  });

  it('should have a ngOnInit method', () => {
    // Arrange
    /* Since we are building our own MainComponent and Angular is not injecting
     * dependencies for us, neither it is running the lifecycle events
     * Therefore, we have to call it manually ourselves*/
    // Act
    // Assert
    expect(component.ngOnInit()).toBeUndefined();
  });

  it('should have subscribeToUser method', () => {
    // Arrange
    const myComponent = new MainContentComponent(mockActivatedRoute, mockUserService);
    // Act
    // Assert
    expect(myComponent.subscribeToUser(1)).toBeUndefined();
  });

  it('should have subscribeToParam method', () => {
    // Arrange
    const myComponent = new MainContentComponent(mockActivatedRoute, mockUserService);
    // Act
    // Assert
    expect(myComponent.subscribeToParam()).toBeUndefined();
  });

});
