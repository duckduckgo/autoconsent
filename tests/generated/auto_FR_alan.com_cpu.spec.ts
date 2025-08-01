import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_alan.com_cpu', ['https://alan.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
