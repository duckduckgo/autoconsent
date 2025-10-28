import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_yorck.de_3ui', ['https://www.yorck.de/en'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
