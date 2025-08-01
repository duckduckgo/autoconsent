import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_pfg.fr_osk', ['https://www.pfg.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
