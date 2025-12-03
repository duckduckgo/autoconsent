import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_graef.de_nlc', ['https://www.graef.de/en/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
