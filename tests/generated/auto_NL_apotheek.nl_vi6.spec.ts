import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_apotheek.nl_vi6', ['https://www.apotheek.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
