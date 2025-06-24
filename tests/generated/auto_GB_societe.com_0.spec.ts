import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_societe.com_0', ['https://www.societe.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
