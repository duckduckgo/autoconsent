import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_brb.de_h4r', ['https://www.brb.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
