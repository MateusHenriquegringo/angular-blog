import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  @Input()
  photo!: string

  @Input()
  title!: string

  @Input()
  description!: string

  private id!: string | null

  constructor(private route: ActivatedRoute) {
  }
  setValuesToComponent(id: any) {

    const result:any = dataFake.find(article => article.id === id);
    console.log(result)   
    this.title = result.title
    this.photo = result.photo
    this.description = result.description
  
}

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => {
      this.id = (value.get('id'))
    })
    this.setValuesToComponent(this.id)
  }
}
