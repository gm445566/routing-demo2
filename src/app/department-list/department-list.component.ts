import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styles: []
})
export class DepartmentListComponent implements OnInit {
  public selectedId: number;
  departments = [
    { 'id': 1, 'name': 'Angular' },
    { 'id': 2, 'name': 'Node' },
    { 'id': 3, 'name': 'MongoDB' },
    { 'id': 4, 'name': 'Ruby' },
    { 'id': 5, 'name': 'Bootstrap' },
  ];

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {

      // tslint:disable-next-line:radix
      const id = parseInt(params.get('id'));
      this.selectedId = id;
    });
  }
  onSelect(department) {
    this.router.navigate(['/departments', department.id])
  }

  // เอาไว้เป็น condition สำหรับแสดง การเลือก munu ,เป็น การ control class
  isSelected(department) {
    return department.id === this.selectedId;
  }
}
