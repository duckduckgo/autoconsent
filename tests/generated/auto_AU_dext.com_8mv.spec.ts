import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_dext.com_8mv', ['https://dext.com/au'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
