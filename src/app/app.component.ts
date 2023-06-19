import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculadora';
  clearCurrentNumber: boolean = false;
  showErrorMessage: boolean = false;
  newCurrentNumber: string = '';
  currentNumber: string = '';

  
  private clearLastCurrentNumber() {
    if(this.clearCurrentNumber) {
      this.currentNumber = '';
      this.clearCurrentNumber = false
    }
  }

  private update() {
    this.newCurrentNumber += this.currentNumber;
    this.currentNumber = '';
  }
  
  onClickNum(num: Number) {
    this.clearLastCurrentNumber();
    this.currentNumber += num.toString();
    this.showErrorMessage = false;
  }
  onClickOperator(operation: String)  {
    if(this.currentNumber.length == 0){
      this.showErrorMessage = true;

    } else {
      this.currentNumber += ` ${operation} `;
      this.update();
    }
  }
  onClickDivision(div: String)  {
      this.currentNumber += div.toString();
      this.update();
  }
  onClickDelete()  {
      if(this.currentNumber.length > 0)
        this.currentNumber = this.currentNumber.slice(0, -1);
      else
        this.newCurrentNumber = this.newCurrentNumber.slice(0, -1); 
  }
  onClickClear()  {
      this.currentNumber = '';
      this.newCurrentNumber = '';
      this.showErrorMessage = false;
  }
  onClickZero()  {
      this.currentNumber += '0';
  }
  onClickPercent() {
      if(this.currentNumber.length > 0){
        this.currentNumber += '%';
      } else {
        this.showErrorMessage = true;
      }
  }
  onClickNegativeAndPositive()  {
    if(this.currentNumber.length == 0)
    {
      this.showErrorMessage = true;
      return;
    }

    let value = parseFloat(this.currentNumber);
    if(value > 0)
    { this.currentNumber = "-" + this.currentNumber; }
    else  if(value < 0)      
    { this.currentNumber = this.currentNumber.slice(1); }
  }
  onClickSquared() {
    if(this.currentNumber.length > 0){
      let value = parseFloat(this.currentNumber);  
      this.currentNumber = Math.pow(value, 2).toString();
    } else {
      this.showErrorMessage = true;
    }
  }
  onClickCubed() {
  let value = parseFloat(this.currentNumber);  
    this.currentNumber = Math.pow(value, 3).toString();
  }
  onClickRes() {
    let expression = this.newCurrentNumber + this.currentNumber;
    if(expression.length > 0){
      this.currentNumber = eval(expression.replace('÷', '/').replace('x', '*'));
      this.newCurrentNumber = '';
      this.clearCurrentNumber = true;
    }
  }
}
