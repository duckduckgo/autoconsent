import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_lcsc.com_o6i', ['https://lcsc.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['AU'] });
