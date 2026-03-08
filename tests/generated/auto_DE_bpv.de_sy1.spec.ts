import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bpv.de_sy1', ['https://bpv.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
