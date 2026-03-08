import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_bbox-actus.com_9x2', ['https://bbox-actus.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
