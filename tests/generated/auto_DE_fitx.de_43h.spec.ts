import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_fitx.de_43h', ['https://www.fitx.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
