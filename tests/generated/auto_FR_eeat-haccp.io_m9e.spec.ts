import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_eeat-haccp.io_m9e', ['https://eeat-haccp.io/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
