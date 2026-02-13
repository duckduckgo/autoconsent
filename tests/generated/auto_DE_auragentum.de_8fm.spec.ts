import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_auragentum.de_8fm', ['https://auragentum.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
