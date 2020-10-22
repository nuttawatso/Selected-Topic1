import { Component, OnInit } from '@angular/core';
import { PostsService } from '../service/Posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  postdatas: any;
  postdataAdd = {
    'sid': null,
    'first': '',
    'last': ''
    // 'title': '',
    // 'description': ''
  }
  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.fetchData();
  }
  fetchData() {
    this.postsService.getPostdatas().subscribe(response => {
      this.postdatas = response;
      console.log(this.postdatas);
    });
  }
  submitReviewAdd() {
    console.log(this.postdataAdd);
    this.fetchData();
    this.postsService.postPostdatas(this.postdataAdd).subscribe((response: {}) => alert('บันทึกเรียบร้อย'));
  }
  deleteData(data: any) {
    console.log(data);
    this.postsService.deletePostdatas(data).subscribe((response: {}) => alert('ลบเรียบร้อย'));
    this.fetchData();
  }
}
