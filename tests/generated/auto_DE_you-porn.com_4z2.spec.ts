import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_you-porn.com_4z2', ['https://www.you-porn.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
