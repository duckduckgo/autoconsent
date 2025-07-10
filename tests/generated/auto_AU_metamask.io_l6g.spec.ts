import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_metamask.io_l6g', ['https://metamask.io/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['AU'] });
