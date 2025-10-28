import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_elfa.se_b7n', ['https://www.elfa.se/en/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
