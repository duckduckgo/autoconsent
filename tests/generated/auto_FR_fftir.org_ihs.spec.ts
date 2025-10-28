import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fftir.org_ihs', ['https://www.fftir.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
