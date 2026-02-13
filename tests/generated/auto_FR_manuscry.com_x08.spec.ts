import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_manuscry.com_x08', ['https://manuscry.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
