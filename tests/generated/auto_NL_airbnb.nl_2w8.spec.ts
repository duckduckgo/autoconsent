import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_airbnb.nl_2w8', ['https://www.airbnb.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
