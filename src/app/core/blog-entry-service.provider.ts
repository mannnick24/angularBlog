import { BlogEntryService } from './blog-entry.service';
import { ConfigService } from './config.service';
import { BlogEntryLocalStorageService } from './blog-entry-local-storage.service';
import { BlogEntryRemoteStorageService } from './blog-entry-remote-storage.service';

function blogServiceFactory(
  configService: ConfigService,
  localStorage: BlogEntryLocalStorageService,
  remoteStorage: BlogEntryRemoteStorageService ) {
    if ( configService.get( ConfigService.STORAGE_PROP ) === ConfigService.BROWSER_LOCAL_STORAGE ) {
        return localStorage;
    } else if ( configService.get( ConfigService.STORAGE_PROP ) === ConfigService.REMOTE_STORAGE ) {
        return remoteStorage;
    }
    else {
      // TODO log default
      return localStorage;
    }
}

export const blogEntryServiceProvider =
  { provide: BlogEntryService,
    useFactory: blogServiceFactory,
    deps: [ConfigService, BlogEntryLocalStorageService, BlogEntryRemoteStorageService]
  };