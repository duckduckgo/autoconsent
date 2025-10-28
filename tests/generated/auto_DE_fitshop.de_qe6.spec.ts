import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_fitshop.de_qe6', ['https://www.fitshop.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
