import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_sellpy.de_g5e', ['https://www.sellpy.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
