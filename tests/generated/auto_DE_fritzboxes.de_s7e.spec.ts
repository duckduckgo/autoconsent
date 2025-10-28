import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_fritzboxes.de_s7e', ['https://fritzboxes.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
