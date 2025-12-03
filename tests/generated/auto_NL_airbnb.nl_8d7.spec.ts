import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_airbnb.nl_8d7', ['https://www.airbnb.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
