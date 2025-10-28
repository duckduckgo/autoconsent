import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_silabs.com_gz1', ['https://www.silabs.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
