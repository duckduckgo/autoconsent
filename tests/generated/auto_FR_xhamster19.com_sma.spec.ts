import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_xhamster19.com_sma', ['https://xhamster19.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
