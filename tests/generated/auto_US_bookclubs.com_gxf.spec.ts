import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_bookclubs.com_gxf', ['https://bookclubs.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
