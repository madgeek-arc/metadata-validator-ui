import { Component, OnInit } from '@angular/core';
import {ClassificationService} from "../../services/classification.service";

@Component({
  selector: 'app-single-record-validator',
  templateUrl: './single-record-validator.component.html',
  styleUrls: ['./single-record-validator.component.less']
})
export class SingleRecordValidatorComponent implements OnInit {

  text: string = null;
  response: string = null;

  constructor(private classificationService: ClassificationService) { }

  ngOnInit(): void {
  }

  classify() {
    console.log(this.text);
    this.response = null;
    this.classificationService.SDGClassification(this.text).subscribe(
      response => this.response = response
   );
  }

}
