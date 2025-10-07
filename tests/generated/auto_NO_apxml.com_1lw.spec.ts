import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_apxml.com_1lw', ['https://apxml.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
