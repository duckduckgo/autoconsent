import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_dicoon.nl_ry4', ['https://dicoon.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
