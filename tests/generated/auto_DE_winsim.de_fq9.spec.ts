import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_winsim.de_fq9', ['https://www.winsim.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
