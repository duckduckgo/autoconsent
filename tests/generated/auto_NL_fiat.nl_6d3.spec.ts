import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_fiat.nl_6d3', ['https://www.fiat.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
