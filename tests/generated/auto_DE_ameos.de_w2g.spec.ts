import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ameos.de_w2g', ['https://www.ameos.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
