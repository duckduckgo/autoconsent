import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_arket.com_3lu', ['https://www.arket.com/en-gb/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
