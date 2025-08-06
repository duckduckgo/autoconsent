import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bhw.de_kht', ['https://www.bhw.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
