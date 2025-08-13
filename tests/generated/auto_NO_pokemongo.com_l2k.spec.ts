import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_pokemongo.com_l2k', ['https://pokemongo.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
