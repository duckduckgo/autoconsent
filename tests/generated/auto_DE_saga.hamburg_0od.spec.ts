import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_saga.hamburg_0od', ['https://www.saga.hamburg/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
