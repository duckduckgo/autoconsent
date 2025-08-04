import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_pokemongo.com_tx7', ['https://pokemongo.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
