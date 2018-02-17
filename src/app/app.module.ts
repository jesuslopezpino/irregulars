import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {GameComponent} from './game/game.component';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import { IrregularverbslistComponent } from './irregularverbslist/irregularverbslist.component';
import { RoundPipe } from './round.pipe';

const appRoutes: Routes = [
  {path: 'game', component: GameComponent},
  {path: 'list', component: IrregularverbslistComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    IrregularverbslistComponent,
    RoundPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: false} // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
