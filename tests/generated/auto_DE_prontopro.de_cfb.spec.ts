import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_prontopro.de_cfb', ['https://prontopro.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
