import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_youfibre.com_snp', ['https://www.youfibre.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
