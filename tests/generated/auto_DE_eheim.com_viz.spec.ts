import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_eheim.com_viz', ['https://eheim.com/de_DE'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
