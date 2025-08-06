import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_abp.nl_lo5', ['https://www.abp.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
