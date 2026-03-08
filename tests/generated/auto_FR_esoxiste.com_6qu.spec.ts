import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_esoxiste.com_6qu', ['https://esoxiste.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
