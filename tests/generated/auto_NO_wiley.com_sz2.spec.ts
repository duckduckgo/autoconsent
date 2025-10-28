import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_wiley.com_sz2', ['https://www.wiley.com/en-no/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
