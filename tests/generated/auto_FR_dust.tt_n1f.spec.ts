import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_dust.tt_n1f', ['https://dust.tt/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
