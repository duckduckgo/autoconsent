import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_sephora.de_exg', ['https://www.sephora.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
