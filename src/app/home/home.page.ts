import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
newMsg: any;
messages = [{msg: ""}];
words2 = [{value: 'word1'}, {value: 'word2'}, {value: 'word3'}, {value: ''}];

  constructor() { 
    
}
send(){
  this.messages.push({msg: this.newMsg});
this.newMsg = "";


}

add() {
  this.words2.push({value: ''});
}

}