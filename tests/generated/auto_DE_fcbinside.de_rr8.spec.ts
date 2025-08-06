import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_fcbinside.de_rr8', ['https://fcbinside.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
