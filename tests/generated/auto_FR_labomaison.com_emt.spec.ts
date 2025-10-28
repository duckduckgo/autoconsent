import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_labomaison.com_emt', ['https://labomaison.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
