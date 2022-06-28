import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-admin-category-form',
  templateUrl: './admin-category-form.component.html',
  styleUrls: ['./admin-category-form.component.css']
})
export class AdminCategoryFormComponent implements OnInit {
  categoryForm: FormGroup;
  categoryId: string;
  constructor(
    private router: Router,
    private activateRoute: ActivatedRoute,
    private CategoryService:CategoryService,
    private toastr: ToastrService
    ) { 
    this.categoryForm = new FormGroup({
      name: new FormControl('',[Validators.required]),
    })
    this.categoryId = '';
  }

  ngOnInit(): void {
    this.categoryId = this.activateRoute.snapshot.params['_id'];
    if(this.categoryId) {
      this.CategoryService.getCategory1(this.categoryId).subscribe(data => {
        this.categoryForm.patchValue({
          name: data.name
        })
      })
    }
  }
redirectToList(){
    this.router.navigateByUrl('/admin/category');
  }
  onValidateNameHasCategory (control: AbstractControl): ValidationErrors|null {
    const inputValue = control.value;

    if(!inputValue.includes('product')){
      return {hasProductError: true}
    }
    return null;
  }
  
  

  onSubmit() {
    console.log(this.categoryForm.value);
    const data = this.categoryForm.value;

    if(this.categoryId !== '' && this.categoryId !== undefined){
      return this.CategoryService.updateCategory(this.categoryId ,data ).subscribe(data => {
        this.toastr.success("bạn đã cập nhật danh mục thành công");
        this.redirectToList();
      })
    }
    return this.CategoryService.createCategory(data).subscribe(data => {
        this.toastr.success("bạn đã thêm danh mục thành công");
        this.redirectToList();
    });

    
  }
}
