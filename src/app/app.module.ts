import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent, initialAppState} from './app.component';
import {ListComponent} from './list/list.component';
import {ListItemComponent} from './list-item/list-item.component';
import {StoreModule} from '@ngrx/store';
import {list} from './reducers/list.reducer';

import {StoreDevtoolsModule} from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ListItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore({
      list
    }, initialAppState),
    StoreDevtoolsModule.instrumentOnlyWithExtension({
      maxAge: 10
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
