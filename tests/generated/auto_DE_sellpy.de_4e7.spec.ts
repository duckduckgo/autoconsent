import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_sellpy.de_4e7', ['https://www.sellpy.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
