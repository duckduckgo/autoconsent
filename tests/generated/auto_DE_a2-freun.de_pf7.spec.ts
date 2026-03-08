import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_a2-freun.de_pf7', ['https://a2-freun.de/forum/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
