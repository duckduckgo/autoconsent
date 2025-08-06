import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_swedbank.se_pku', ['https://www.swedbank.se/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
