import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_de.tommy.com_cgt', ['https://de.tommy.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
