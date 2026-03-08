import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_afag.no_hxv', ['https://afag.no/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
