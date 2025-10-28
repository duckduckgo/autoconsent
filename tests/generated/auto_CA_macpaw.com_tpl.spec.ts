import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_macpaw.com_tpl', ['https://macpaw.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
