import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_bggc.co.uk_2h9', ['https://bggc.co.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
