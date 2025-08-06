import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_profishop.de_8ag', ['https://www.profishop.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
