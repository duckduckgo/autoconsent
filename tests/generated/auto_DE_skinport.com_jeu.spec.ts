import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_skinport.com_jeu', ['https://skinport.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
