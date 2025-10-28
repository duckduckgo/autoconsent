import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_nhnieuws.nl_yr4', ['https://www.nhnieuws.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
