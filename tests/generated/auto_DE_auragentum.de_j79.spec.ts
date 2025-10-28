import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_auragentum.de_j79', ['https://auragentum.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
