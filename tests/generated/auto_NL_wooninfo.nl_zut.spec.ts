import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_wooninfo.nl_zut', ['https://www.wooninfo.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
