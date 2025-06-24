import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_casio.com_0', ['https://www.casio.com/uk/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
