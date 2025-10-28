import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_dreuz.info_kwv', ['https://www.dreuz.info/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
