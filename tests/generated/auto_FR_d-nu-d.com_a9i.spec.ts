import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_d-nu-d.com_a9i', ['https://d-nu-d.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
