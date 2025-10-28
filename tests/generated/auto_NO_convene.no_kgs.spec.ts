import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_convene.no_kgs', ['https://convene.no/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
