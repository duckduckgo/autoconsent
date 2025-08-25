import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_skandix.de_qkh', ['https://www.skandix.de/en/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
