import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_finwiss.de_74u', ['https://finwiss.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
