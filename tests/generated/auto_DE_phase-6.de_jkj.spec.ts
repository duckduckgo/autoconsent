import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_phase-6.de_jkj', ['https://www.phase-6.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
