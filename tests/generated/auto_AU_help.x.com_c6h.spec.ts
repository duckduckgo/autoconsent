import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_help.x.com_c6h', ['https://help.x.com/en'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
