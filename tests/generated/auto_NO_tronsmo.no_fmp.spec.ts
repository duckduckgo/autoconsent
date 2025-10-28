import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_tronsmo.no_fmp', ['https://www.tronsmo.no/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
