import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_auragentum.de_otf', ['https://auragentum.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
