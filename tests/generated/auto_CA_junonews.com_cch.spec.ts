import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_junonews.com_cch', ['https://www.junonews.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
