import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EntriesComponent } from './entries/entries.component';
import { EntryComponent } from './entries/entry.component';
import { ReaderComponent } from './entries/reader.component';
import { WriterComponent } from './entries/writer.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SearchComponent } from './toolbar/search.component';
import { InlineSVGModule } from 'ng-inline-svg';
import { blogEntryServiceProvider } from './core/blog-entry-service.provider';
import { ConfigService } from './core/config.service';
import { LocalStorageService } from './core/local-storage.service';
import { BlogEntryRemoteStorageService } from './core/blog-entry-remote-storage.service';
import { BlogEntryLocalStorageService } from './core/blog-entry-local-storage.service';
import { BlogEntrySelectedService } from './core/blog-entry-selected.service';

@NgModule({
  declarations: [
    AppComponent,
    EntriesComponent,
    EntryComponent,
    ReaderComponent,
    WriterComponent,
    ToolbarComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NoopAnimationsModule,
    FlexLayoutModule,
    InlineSVGModule,
    HttpClientModule
  ],
  providers: [
    blogEntryServiceProvider,
    ConfigService,
    LocalStorageService,
    BlogEntryRemoteStorageService,
    BlogEntryLocalStorageService,
    BlogEntrySelectedService
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
