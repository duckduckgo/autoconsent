import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_reviewed.com_f1g', ['https://www.reviewed.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
