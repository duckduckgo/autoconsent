import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_tedi.com_5nf', ['https://www.tedi.com/en/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
