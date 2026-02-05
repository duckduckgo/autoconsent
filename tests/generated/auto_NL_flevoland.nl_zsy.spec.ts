import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_flevoland.nl_zsy', ['https://www.flevoland.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
