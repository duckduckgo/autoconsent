import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_afcdp.net_dt7', ['https://afcdp.net/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
