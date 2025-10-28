import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_afu-base.de_0ig', ['https://afu-base.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
