import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_noviscore.fr_vge', ['https://www.noviscore.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
