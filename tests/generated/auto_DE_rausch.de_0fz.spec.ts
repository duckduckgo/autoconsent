import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_rausch.de_0fz', ['https://rausch.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
