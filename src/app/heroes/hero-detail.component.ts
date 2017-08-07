import {Component, Input, OnInit} from "@angular/core";
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Address, Hero, states} from "./models";

@Component({
  moduleId: module.id,
  selector: "hero-detail-component",
  templateUrl: "hero-detail.component.html"
})

export class HeroDetailComponent implements OnInit {
  //#region state
  @Input() public hero: Hero;
  public detailInfo: FormGroup;
  public states: string[] = states;
  //#endregion
  //#region behavior
  constructor(private formBuilder: FormBuilder) {
    this.createBindingsForDetailInfo();
    this.logNameChanges();
  }

  private createBindingsForDetailInfo() {
    this.detailInfo = this.formBuilder.group({
      name: [ "", Validators.required || Validators.maxLength(3) ],
      secretLairs: this.formBuilder.array([]),
      power: [ "" ],
      sidekick: [ "" ]
    });
  }

  public addSecretLair(): void {
    this.secretLairs.push(this.formBuilder.group(new Address()));
  }

  public removeSecretLair(): void {
    if (this.secretLairs.length === 0) {return; }
    this.secretLairs.removeAt(this.secretLairs.length - 1);
  }

  private setAddresses(addresses: Address[]): void {
    const formGroups: FormGroup[] = addresses.map(address => this.formBuilder.group(address));
    const formArray: FormArray = this.formBuilder.array(formGroups);
    this.detailInfo.setControl("secretLairs", formArray);
  }


  public get secretLairs(): FormArray {
    return this.detailInfo.get("secretLairs") as FormArray;
  };

  ngOnInit() {
  }
  //#endregion
  private logNameChanges() {
    const nameControl = this.detailInfo.get("name");
    if (nameControl == null) {
      return;
    }
    nameControl.valueChanges.forEach(
      (value: string) => console.log("name changed" + value)
    );
  }
}
