import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_reverb.com_tmh', ['https://reverb.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
