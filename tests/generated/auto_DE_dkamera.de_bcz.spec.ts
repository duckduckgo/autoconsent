import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_dkamera.de_bcz', ['https://www.dkamera.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
