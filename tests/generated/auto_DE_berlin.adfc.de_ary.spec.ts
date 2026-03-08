import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_berlin.adfc.de_ary', ['https://berlin.adfc.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
