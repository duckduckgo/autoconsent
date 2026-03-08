import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_dorsia.no_1pr', ['https://dorsia.no/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
