import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_xrealgirl.com_96m', ['https://xrealgirl.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
