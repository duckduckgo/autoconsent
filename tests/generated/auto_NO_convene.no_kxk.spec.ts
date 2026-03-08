import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_convene.no_kxk', ['https://convene.no/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
