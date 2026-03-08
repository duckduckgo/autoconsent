import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_bytewires.com_6h8', ['https://bytewires.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
