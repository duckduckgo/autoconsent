import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_bp.com_0', ['https://www.bp.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
