import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_artoffice.info_xoy', ['https://artoffice.info/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
