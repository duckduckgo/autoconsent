import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bau-master.com_df9', ['https://bau-master.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
