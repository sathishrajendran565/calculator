import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "calculator";
  selected;

  ngOnInit() {
    this.selected = 1;
    this.result = 0;
  }

  result: number;
  Add(first: number, second: number, third: number) {
    this.result = +first + +second + +third;
  }

  Multiply(first: number, second: number, third: number) {
    this.result = first * second * third;
  }

  updateResult(first: number, second: number, third: number) {
    if (this.selected == 1) {
      this.Add(first, second, third);
    } else {
      this.Multiply(first, second, third);
    }
  }
}