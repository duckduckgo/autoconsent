import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_macway.com_ejv', ['https://www.macway.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
