import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_kochform.de_nu6', ['https://www.kochform.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
