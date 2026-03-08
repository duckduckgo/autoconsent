import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_buurkracht.nl_7ll', ['https://buurkracht.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
