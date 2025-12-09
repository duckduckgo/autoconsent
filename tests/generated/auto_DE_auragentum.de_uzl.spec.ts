import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_auragentum.de_uzl', ['https://auragentum.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
