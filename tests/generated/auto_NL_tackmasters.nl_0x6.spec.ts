import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_tackmasters.nl_0x6', ['https://tackmasters.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
