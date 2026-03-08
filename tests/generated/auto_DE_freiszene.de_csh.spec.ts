import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_freiszene.de_csh', ['https://freiszene.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
