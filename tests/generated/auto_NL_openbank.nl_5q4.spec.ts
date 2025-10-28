import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_openbank.nl_5q4', ['https://www.openbank.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
