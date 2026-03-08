import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_dext.com_o5b', ['https://dext.com/au'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
