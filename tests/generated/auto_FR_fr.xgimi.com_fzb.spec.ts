import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fr.xgimi.com_fzb', ['https://fr.xgimi.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
