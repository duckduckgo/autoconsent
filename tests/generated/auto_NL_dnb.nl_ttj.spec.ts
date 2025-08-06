import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_dnb.nl_ttj', ['https://www.dnb.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
