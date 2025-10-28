import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_telefoon.nl_ee5', ['https://www.telefoon.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
