import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_builtineu.eu_zfv', ['https://builtineu.eu/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
