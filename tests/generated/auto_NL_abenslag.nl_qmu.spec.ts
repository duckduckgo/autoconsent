import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_abenslag.nl_qmu', ['https://abenslag.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
