import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cadoetik.com_qgx', ['https://cadoetik.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
