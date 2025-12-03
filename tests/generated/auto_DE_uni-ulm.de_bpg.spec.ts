import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_uni-ulm.de_bpg', ['https://www.uni-ulm.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
