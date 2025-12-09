import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_kochform.de_8kn', ['https://www.kochform.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
