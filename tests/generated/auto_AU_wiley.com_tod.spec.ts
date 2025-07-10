import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_wiley.com_tod', ['https://www.wiley.com/en-au'], { testOptIn: false, testSelfTest: false, onlyRegions: ['AU'] });
