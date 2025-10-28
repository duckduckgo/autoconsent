import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_info.gouv.fr_xz1', ['https://www.info.gouv.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
