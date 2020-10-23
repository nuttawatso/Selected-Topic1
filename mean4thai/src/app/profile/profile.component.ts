import { Component, OnInit } from '@angular/core';
import { PostsService } from '../service/Posts.service';
import { AuthService } from '@app/shared/services';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  postdatas: any;
  user_data: any;

  constructor(private postsService: PostsService,
    private authService: AuthService) { }

  ngOnInit() {
    this.fetchData();
    this.authService.getUser().subscribe(data => this.user_data = data);
  }
  fetchData() {
    this.postsService.getPostdatas().subscribe(response => {
      this.postdatas = response;
      console.log(this.postdatas);
    });
  }
  submitReviewAdd() {
    // console.log(this.postdataAdd);
    this.fetchData();
    // this.postsService.postPostdatas(this.postdataAdd).subscribe((response: {}) => alert('บันทึกเรียบร้อย'));
  }
  deleteData(data: any) {
    console.log(data);
    this.postsService.deletePostdatas(data).subscribe((response: {}) => alert('ลบเรียบร้อย'));
    this.fetchData();
  }

}
