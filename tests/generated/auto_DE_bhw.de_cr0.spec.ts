import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bhw.de_cr0', ['https://www.bhw.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
