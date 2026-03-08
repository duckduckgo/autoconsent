import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bw.adfc.de_iqe', ['https://bw.adfc.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
