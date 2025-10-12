import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_xhamster.com_grv', ['https://xhamster.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
