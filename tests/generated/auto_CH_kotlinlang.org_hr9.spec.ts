import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_kotlinlang.org_hr9', ['https://kotlinlang.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
