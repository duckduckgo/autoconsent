import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_amazon.se_2m2', ['https://www.amazon.se/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
