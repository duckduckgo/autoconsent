import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_easyeda.com_xld', ['https://easyeda.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
