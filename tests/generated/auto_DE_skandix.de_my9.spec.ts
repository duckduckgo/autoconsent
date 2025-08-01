import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_skandix.de_my9', ['https://www.skandix.de/en/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
