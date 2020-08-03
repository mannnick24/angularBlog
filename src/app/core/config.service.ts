import { Injectable, Inject } from '@angular/core';

import { APP_CONFIG, AppConfig } from '../app-config.module';

@Injectable()
export class ConfigService {
    static STORAGE_PROP = "storage";
    static STORAGE_URL_PROP = "storageUrl";
    static BROWSER_LOCAL_STORAGE = "local";
    static REMOTE_STORAGE = "remote";
    static SAMPLES = "samples";

    constructor( @Inject(APP_CONFIG) private config: AppConfig ) {}

    get( configProperty: string ) {
        return this.config[configProperty];
    }
}