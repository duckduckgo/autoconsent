import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_on1.com_crn', ['https://www.on1.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
