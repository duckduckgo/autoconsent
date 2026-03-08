import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_betogingen.nl_eej', ['https://betogingen.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
