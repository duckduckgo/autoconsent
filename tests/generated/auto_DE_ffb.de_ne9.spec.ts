import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ffb.de_ne9', ['https://www.ffb.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
