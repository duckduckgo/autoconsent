import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bandlab.com_69k', ['https://www.bandlab.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
