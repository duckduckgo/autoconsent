import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_reverb.com_cvl', ['https://reverb.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
