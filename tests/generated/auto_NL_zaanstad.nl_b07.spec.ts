import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_zaanstad.nl_b07', ['https://www.zaanstad.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
