import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_dstock41.com_o8n', ['https://dstock41.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
