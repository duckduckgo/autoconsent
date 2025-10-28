import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_domene.no_nzk', ['https://www.domene.no/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
