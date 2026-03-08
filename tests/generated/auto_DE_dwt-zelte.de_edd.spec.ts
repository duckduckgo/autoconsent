import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_dwt-zelte.de_edd', ['https://dwt-zelte.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
