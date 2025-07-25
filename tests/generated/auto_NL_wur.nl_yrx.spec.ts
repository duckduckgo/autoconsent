import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_wur.nl_yrx', ['https://www.wur.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
