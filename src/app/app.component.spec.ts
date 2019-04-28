import { TestBed, async, ComponentFixture } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { DebugElement, asNativeElements } from "@angular/core";
import { By } from "@angular/platform-browser";

describe("AppComponent", () => {
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule],
      declarations: [AppComponent]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
  }));

  it("## should create the app", () => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it("## should create the app and initialize controls with default values", () => {
    fixture.componentInstance.ngOnInit();
    fixture.componentInstance.selected = 1;
    fixture.componentInstance.result = 0;
    fixture.detectChanges();
    var resultlabel = fixture.debugElement.query(By.css("label.result"));
    expect(resultlabel.nativeElement.textContent).toBe("Result: 0");
    fixture.whenStable().then(() => {
      var inputRadio = fixture.debugElement.query(By.css("input.sum-radio"));
      expect(inputRadio.nativeElement.checked).toBe(true);
    });
  });

  it("## should add three numbers correctly", () => {
    fixture.detectChanges();
    const firstInput = fixture.debugElement.query(By.css("#firstNumber"))
      .nativeElement;
    const secondInput = fixture.debugElement.query(By.css("#secondNumber"))
      .nativeElement;
    const thirdInput = fixture.debugElement.query(By.css("#thirdNumber"))
      .nativeElement;
    var resultlabel = fixture.debugElement.query(By.css("label.result"));

    firstInput.value = 1;
    secondInput.value = 2;
    thirdInput.value = 3;
    fixture.componentInstance.selected = 1;

    firstInput.dispatchEvent(new Event("input"));
    secondInput.dispatchEvent(new Event("input"));
    thirdInput.dispatchEvent(new Event("input"));

    fixture.componentInstance.updateResult(
      firstInput.value,
      secondInput.value,
      thirdInput.value
    );
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(firstInput.value).toEqual("1");
      expect(secondInput.value).toEqual("2");
      expect(thirdInput.value).toEqual("3");
      expect(resultlabel.nativeElement.textContent).toBe("Result: 6");
    });
  });

  it("## should multiply three numbers correctly", () => {
    fixture.detectChanges();
    const firstInput = fixture.debugElement.query(By.css("#firstNumber"))
      .nativeElement;
    const secondInput = fixture.debugElement.query(By.css("#secondNumber"))
      .nativeElement;
    const thirdInput = fixture.debugElement.query(By.css("#thirdNumber"))
      .nativeElement;
    var resultlabel = fixture.debugElement.query(By.css("label.result"));

    firstInput.value = 1;
    secondInput.value = 4;
    thirdInput.value = 3;
    fixture.componentInstance.selected = 2;

    firstInput.dispatchEvent(new Event("input"));
    secondInput.dispatchEvent(new Event("input"));
    thirdInput.dispatchEvent(new Event("input"));

    fixture.componentInstance.updateResult(
      firstInput.value,
      secondInput.value,
      thirdInput.value
    );
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(firstInput.value).toEqual("1");
      expect(secondInput.value).toEqual("4");
      expect(thirdInput.value).toEqual("3");
      expect(resultlabel.nativeElement.textContent).toBe("Result: 12");
    });
  });
});