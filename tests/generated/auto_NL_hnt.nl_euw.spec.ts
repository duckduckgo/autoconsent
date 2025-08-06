import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_hnt.nl_euw', ['https://www.hnt.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
