import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_folkhus.se_4ev', ['https://folkhus.se/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
