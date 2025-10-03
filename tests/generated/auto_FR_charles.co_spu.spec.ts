import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_charles.co_spu', ['https://www.charles.co/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
