import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_anfi.com_slf', ['https://anfi.com/en/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
