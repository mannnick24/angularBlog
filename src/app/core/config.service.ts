import { Injectable, Inject } from '@angular/core';

import { environment } from '../../environments/environment';


@Injectable()
export class ConfigService {
    static STORAGE_PROP = "storage";
    static STORAGE_URL_PROP = "storageUrl";
    static SAMPLES_PROP = "samples";

    static BROWSER_LOCAL_STORAGE = "local";
    static REMOTE_STORAGE = "remote";


    get( configProperty: string ) {
        return environment[configProperty];
    }
}