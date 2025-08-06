import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_de.tommy.com_yw4', ['https://de.tommy.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
