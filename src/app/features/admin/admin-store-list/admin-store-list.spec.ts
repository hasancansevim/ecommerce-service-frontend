import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminStoreList } from './admin-store-list';

describe('AdminStoreList', () => {
  let component: AdminStoreList;
  let fixture: ComponentFixture<AdminStoreList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminStoreList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminStoreList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
