import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_bonprix.nl_ovi', ['https://www.bonprix.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
