import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_lebegeil.de_yt8', ['https://www.lebegeil.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
