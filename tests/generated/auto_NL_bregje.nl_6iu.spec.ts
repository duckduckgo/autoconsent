import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_bregje.nl_6iu', ['https://bregje.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
