import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_holab.de_qqq', ['https://holab.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
