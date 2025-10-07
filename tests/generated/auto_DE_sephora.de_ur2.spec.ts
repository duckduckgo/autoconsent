import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_sephora.de_ur2', ['https://www.sephora.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
