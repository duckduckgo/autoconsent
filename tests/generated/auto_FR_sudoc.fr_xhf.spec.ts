import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_sudoc.fr_xhf', ['https://www.sudoc.abes.fr/cbs/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
