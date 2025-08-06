import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_vrn.de_3pa', ['https://www.vrn.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
