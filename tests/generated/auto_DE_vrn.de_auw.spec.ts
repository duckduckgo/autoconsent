import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_vrn.de_auw', ['https://www.vrn.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
