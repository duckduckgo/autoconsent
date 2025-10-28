import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_fair.no_g90', ['https://www.fair.no/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
