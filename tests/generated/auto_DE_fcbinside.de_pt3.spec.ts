import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_fcbinside.de_pt3', ['https://fcbinside.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
