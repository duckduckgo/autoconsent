import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_vodafone.de_b4y', ['https://www.vodafone.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
