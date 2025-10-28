import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_btcmotors.fr_noz', ['https://btcmotors.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
