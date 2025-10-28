import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_spokeo.com_z8r', ['https://www.spokeo.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
