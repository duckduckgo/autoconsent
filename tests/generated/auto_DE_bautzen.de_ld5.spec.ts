import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bautzen.de_ld5', ['https://www.bautzen.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
