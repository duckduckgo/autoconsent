import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_swedavia.se_v9s', ['https://www.swedavia.se/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
