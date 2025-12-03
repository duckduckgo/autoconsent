import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_fitx.de_gg2', ['https://www.fitx.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
