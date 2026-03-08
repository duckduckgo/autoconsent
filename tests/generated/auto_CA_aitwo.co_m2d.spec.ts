import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_aitwo.co_m2d', ['https://aitwo.co/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
