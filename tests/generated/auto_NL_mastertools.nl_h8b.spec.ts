import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_mastertools.nl_h8b', ['https://mastertools.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
