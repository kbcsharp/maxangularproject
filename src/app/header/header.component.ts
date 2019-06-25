import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  @Output() navOptionSelected = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  // onSelect(navOption: string) {
  //   this.navOptionSelected.emit(navOption);
  // }
}
