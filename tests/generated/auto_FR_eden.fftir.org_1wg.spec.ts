import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_eden.fftir.org_1wg', ['https://eden.fftir.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
