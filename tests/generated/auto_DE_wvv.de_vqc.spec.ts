import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_wvv.de_vqc', ['https://www.wvv.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
