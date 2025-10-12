import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_xhamster.desi_pv1', ['https://xhamster.desi/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
