import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_vevor.nl_qjm', ['https://www.vevor.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
