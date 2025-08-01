import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bandlab.com_j7q', ['https://www.bandlab.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
