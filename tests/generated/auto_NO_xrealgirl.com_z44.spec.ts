import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_xrealgirl.com_z44', ['https://xrealgirl.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
