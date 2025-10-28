import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cabaigne.net_aci', ['https://www.cabaigne.net/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
