import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_fanger.no_6gw', ['https://www.fanger.no/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
