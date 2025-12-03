import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_de.tommy.com_2tj', ['https://de.tommy.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
