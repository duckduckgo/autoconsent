import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_esut.de_fza', ['https://esut.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
