import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_usa.visa.com_99f', ['https://usa.visa.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
