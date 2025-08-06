import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_nelson.nl_etc', ['https://www.nelson.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
