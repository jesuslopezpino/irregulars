import {IrregularVerb} from '../irregularverb';
import {IrregularverbslistComponent} from '../irregularverbslist/irregularverbslist.component';
import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Rx';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  gameTime: number;

  gameTimeString: Date;

  gameInterval: any;

  currentIndex: number;

  currentVerb: IrregularVerb;

  userPast: string;

  userPastOK: boolean;

  userPastParticiple: string;

  userPastParticipleOK: boolean;

  userTranslation: string;

  userTranslationOK: boolean;

  playerWins: boolean;

  verbs: IrregularVerb[];

  knownVerbs: IrregularVerb[];

  irregularVerbsList: IrregularverbslistComponent;

  constructor() {
  }


  ngOnInit() {
    this.gameTime = 0;
    this.gameTimeString = new Date(this.gameTime);
    this.gameInterval = setInterval(() => {
      this.gameTime = this.gameTime + 1000;
      this.gameTimeString = new Date(this.gameTime);
      console.debug('increase: ' + this.gameTimeString);
    }, 1000);
    this.playerWins = false;
    this.resetFields();
    this.initLists();
    this.getRandomVerb();
  }


  play(event: any) {
    console.debug('play');
    this.trimFields();
    this.userPastOK = this.checkUserPast();
    this.userPastParticipleOK = this.checkUserPastParticiple();
    this.userTranslationOK = this.checkUserTranslation();

    if (this.userPastOK && this.userPastParticipleOK && this.userTranslationOK) {
      console.debug('ok');
      this.resetFields();
      this.removeKnownVerb();
      if (this.verbs.length === 0) {
        this.playerWins = true;
        clearInterval(this.gameInterval);
      } else {
        this.getRandomVerb();
      }
    } else {
      console.debug('no');
    }
  }

  private equalsCaseUnsensitive(string1: string, string2: string): boolean {
    return (string1 != null && string2 != null && string1.toUpperCase() === string2.toUpperCase());

  }

  private checkUserPast(): boolean {
    console.debug('this.userPast=' + this.userPast);
    console.debug('this.currentVerb.past=' + this.currentVerb.past);
    console.debug('equal: ' + this.equalsCaseUnsensitive(this.userPast, this.currentVerb.past));
    return this.equalsCaseUnsensitive(this.userPast, this.currentVerb.past);
  }

  private checkUserPastParticiple(): boolean {
    console.debug('this.userPastParticiple=' + this.userPastParticiple);
    console.debug('this.currentVerb.pastParticiple=' + this.currentVerb.pastParticiple);
    console.debug('equal: ' + this.equalsCaseUnsensitive(this.userPastParticiple, this.currentVerb.pastParticiple));
    return this.equalsCaseUnsensitive(this.userPastParticiple, this.currentVerb.pastParticiple);
  }

  private checkUserTranslation(): boolean {
    console.debug('this.userTranslation=' + this.userTranslation);
    console.debug('this.currentVerb.translation=' + this.currentVerb.translation);
    console.debug('equal: ' + this.equalsCaseUnsensitive(this.userTranslation, this.currentVerb.translation));
    return this.equalsCaseUnsensitive(this.userTranslation, this.currentVerb.translation);
  }

  private randomVerbIndex(): number {
    const random: number = Math.floor(Math.random() * this.verbs.length);
    return random;
  }

  private getRandomVerb(): void {
    this.currentIndex = this.randomVerbIndex();
    this.currentVerb = this.verbs[this.currentIndex];
  }

  private initLists(): void {
    this.irregularVerbsList = new IrregularverbslistComponent();
    this.verbs = this.irregularVerbsList.list;
    this.knownVerbs = new Array();
  }

  private resetFields(): void {
    this.userPast = null;
    this.userPastOK = false;
    this.userPastParticiple = null;
    this.userPastParticipleOK = false;
    this.userTranslation = null;
    this.userTranslationOK = false;
  }

  private trimField(str: string): string {
    if (str != null) {
      return str.trim();
    } else {
      return null;
    }
  }

  private trimFields(): void {
    this.userPast = this.trimField(this.userPast);
    this.userPastParticiple = this.trimField(this.userPastParticiple);
    this.userTranslation = this.trimField(this.userTranslation);
  }

  private removeKnownVerb() {
    this.knownVerbs.push(this.currentVerb);
    this.verbs.splice(this.currentIndex, 1);

  }
}
