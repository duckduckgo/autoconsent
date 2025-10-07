import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_xhamster.com_pxx', ['https://xhamster.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
