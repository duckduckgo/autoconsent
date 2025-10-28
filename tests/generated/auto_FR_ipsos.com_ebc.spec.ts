import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_ipsos.com_ebc', ['https://www.ipsos.com/en-us'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
