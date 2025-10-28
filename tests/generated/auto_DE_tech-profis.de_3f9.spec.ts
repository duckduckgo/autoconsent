import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_tech-profis.de_3f9', ['https://tech-profis.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
