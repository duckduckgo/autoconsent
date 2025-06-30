import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_reviewed.com_ybc', ['https://www.reviewed.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
