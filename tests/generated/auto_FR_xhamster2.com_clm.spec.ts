import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_xhamster2.com_clm', ['https://xhamster2.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
