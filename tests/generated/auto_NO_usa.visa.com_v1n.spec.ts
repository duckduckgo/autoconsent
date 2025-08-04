import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_usa.visa.com_v1n', ['https://usa.visa.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
