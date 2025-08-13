import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_wvv.de_p4v', ['https://www.wvv.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
