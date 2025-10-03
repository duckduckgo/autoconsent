import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_apxml.com_l6n', ['https://apxml.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
