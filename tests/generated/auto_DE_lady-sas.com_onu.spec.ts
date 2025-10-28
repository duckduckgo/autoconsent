import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_lady-sas.com_onu', ['https://lady-sas.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
