import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_louis.nl_55z', ['https://www.louis.nl/nl'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
