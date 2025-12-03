import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_xhamster3.com_oxv', ['https://xhamster3.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
