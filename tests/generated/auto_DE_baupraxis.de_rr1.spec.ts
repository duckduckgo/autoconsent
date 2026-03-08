import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_baupraxis.de_rr1', ['https://baupraxis.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
