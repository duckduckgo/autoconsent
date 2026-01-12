import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_onmascout.de_hkd', ['https://www.onmascout.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
