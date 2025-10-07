import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_xhamster.desi_0nq', ['https://xhamster.desi/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
