import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_aknw.de_c4i', ['https://www.aknw.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
