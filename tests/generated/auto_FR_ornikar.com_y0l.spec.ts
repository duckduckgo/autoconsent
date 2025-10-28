import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_ornikar.com_y0l', ['https://www.ornikar.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
