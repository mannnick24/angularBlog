import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { EntriesComponent } from './entries/entries.component';
import { EntryComponent } from './entry/entry.component';
import { EntriesListComponent } from './entries-list/entries-list.component';
import { ReaderComponent } from './reader/reader.component';
import { WriterComponent } from './writer/writer.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SearchComponent } from './search/search.component';
import { InlineSVGModule } from 'ng-inline-svg';
import { blogEntryServiceProvider } from './core/blog-entry-service.provider';
import { ConfigService } from './core/config.service';
import { LocalStorageService } from './core/local-storage.service';
import { BlogEntryRemoteStorageService } from './core/blog-entry-remote-storage.service';
import { BlogEntryLocalStorageService } from './core/blog-entry-local-storage.service';
import { BlogEntrySelectedService } from './core/blog-entry-selected.service';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { UserService } from './core/user.service';
import { BlogEntrySampleService } from './core/blog-entry-sample.service';

const routes: Routes = [
  { path: 'grid', component: EntriesComponent },
  { path: 'list', component: EntriesListComponent },
  { path: '',   redirectTo: '/list', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    EntriesComponent,
    EntryComponent,
    ReaderComponent,
    WriterComponent,
    ToolbarComponent,
    SearchComponent,
    EntriesListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NoopAnimationsModule,
    FlexLayoutModule,
    InlineSVGModule,
    HttpClientModule,
    NgxDropzoneModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    blogEntryServiceProvider,
    ConfigService,
    LocalStorageService,
    BlogEntryRemoteStorageService,
    BlogEntryLocalStorageService,
    BlogEntrySelectedService,
    UserService,
    BlogEntrySampleService
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
