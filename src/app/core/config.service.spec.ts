import { ConfigService } from "./config.service";

describe('ConfigService', () => {
    let configService: ConfigService;

    beforeEach(() => {
        configService = new ConfigService();
    });

    it('environment values', () => {
      expect( configService).toBeTruthy();
      expect( configService.get( ConfigService.STORAGE_PROP ).to.be.equal( "local" ) );
      expect( configService.get( ConfigService.SAMPLES_PROP ).to.be.equal( true ) );
    } );
} );