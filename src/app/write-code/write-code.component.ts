import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-write-code',
  templateUrl: './write-code.component.html',
  styleUrls: ['./write-code.component.scss'],
})
export class WriteCodeComponent implements OnInit {
  writeInputCode;
  invalidCode: boolean = false;
  outputText: string = '';
  constructor(
    private service: ServiceService,
    private spin: NgxSpinnerService
  ) {}

  ngOnInit(): void {}
  explainCode() {
    if (this.writeInputCode == null || this.writeInputCode.length < 3) {
      this.invalidCode = true;
      this.outputText = '';
    } else {
      this.invalidCode = false;
      this.spin.show();
      this.outputText = '';
      let input =
        'explain this code in bullet points,here is the code:' +
        this.writeInputCode +
        ',note:answer if it a coding related question';
      this.service.responce(input).then((res) => {
        this.spin.hide();
        this.outputText = res['data'].choices[0].text;
      });
    }
  }
  DebugCode() {
    if (this.writeInputCode == null || this.writeInputCode.length < 3) {
      this.invalidCode = true;
      this.outputText = '';
    } else {
      this.invalidCode = false;
      this.spin.show();
      this.outputText = '';
      let input =
        'debug,tell errors and give correct code,here is the code : :' +
        this.writeInputCode +
        ',note:answer if it a coding related question';
      this.service.responce(input).then((res) => {
        this.spin.hide();
        this.outputText = res['data'].choices[0].text;
      });
    }
  }
  rateCode() {
    if (this.writeInputCode == null || this.writeInputCode.length < 3) {
      this.invalidCode = true;
      this.outputText = '';
    } else {
      this.invalidCode = false;
      this.spin.show();
      this.outputText = '';
      let input =
        'rate this code out of 5 ,here is the code :' +
        this.writeInputCode +
        ',note:answer if it a coding related question';
      this.service.responce(input).then((res) => {
        this.spin.hide();
        this.outputText = res['data'].choices[0].text;
      });
    }
  }
}
