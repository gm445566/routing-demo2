import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styles: []
})
export class DepartmentDetailComponent implements OnInit {
  public departmentId;
  // ActivatedRoute เป็น service ที่ใช้รับค่า parameter
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    // รับค่า id มาจาก parameter
    // tslint:disable-next-line:radix
    /* const id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.departmentId = id; */

    // ParaMap เป็น service ใช้ map กับ router module ที่ set menu ไว้
    this.route.paramMap.subscribe((params: ParamMap) => {

      // tslint:disable-next-line:radix
      const id = parseInt(params.get('id'));
      this.departmentId = id;
    });
  }
  goPrevious() {
    // tslint:disable-next-line:prefer-const
    let previousId = this.departmentId - 1;
    // this.router.navigate(['/departments', previousId]);
    this.router.navigate(['../', previousId], { relativeTo: this.route });
  }
  goNext() {
    // tslint:disable-next-line:prefer-const
    let nextId = this.departmentId + 1;
    // this.router.navigate(['/departments', nextId]);
    this.router.navigate(['../', nextId], { relativeTo: this.route });
  }

  gotoDepartments() {
    const selectdId = this.departmentId ? this.departmentId : null;
    // this.router.navigate(['/departments', { id: selectdId, test: 'testparameter' }]);

    this.router.navigate(['../', { id: selectdId }], { relativeTo: this.route });
  }

  showOverview() {
    this.router.navigate(['overview'], { relativeTo: this.route });
  }

  showContact() {
    this.router.navigate(['contact'], { relativeTo: this.route });
  }
}
