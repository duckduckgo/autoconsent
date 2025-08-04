import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_you-porn.com_zm2', ['https://www.you-porn.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
