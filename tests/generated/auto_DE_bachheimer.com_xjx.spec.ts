import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bachheimer.com_xjx', ['https://bachheimer.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
