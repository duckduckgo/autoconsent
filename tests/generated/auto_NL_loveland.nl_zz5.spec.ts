import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_loveland.nl_zz5', ['https://loveland.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
