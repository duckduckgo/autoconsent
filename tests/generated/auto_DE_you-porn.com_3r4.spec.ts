import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_you-porn.com_3r4', ['https://www.you-porn.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
