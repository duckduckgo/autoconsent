import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_flashrc.com_km9', ['https://www.flashrc.com/en/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
