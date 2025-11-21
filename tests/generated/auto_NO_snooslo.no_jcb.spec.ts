import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_snooslo.no_jcb', ['https://snooslo.no/en'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
