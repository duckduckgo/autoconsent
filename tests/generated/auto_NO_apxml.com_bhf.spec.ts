import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_apxml.com_bhf', ['https://apxml.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
