import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_pl.pornhub.com_mmu', ['https://pl.pornhub.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
