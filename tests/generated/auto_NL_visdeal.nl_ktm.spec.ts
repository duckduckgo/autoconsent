import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_visdeal.nl_ktm', ['https://visdeal.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
