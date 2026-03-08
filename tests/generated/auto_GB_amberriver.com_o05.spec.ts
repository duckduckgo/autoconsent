import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_amberriver.com_o05', ['https://amberriver.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
