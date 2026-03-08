import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_asolution.nl_qhe', ['https://asolution.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
