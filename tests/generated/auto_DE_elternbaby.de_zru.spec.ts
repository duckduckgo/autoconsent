import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_elternbaby.de_zru', ['https://elternbaby.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
