import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_xrealgirl.com_11q', ['https://xrealgirl.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
