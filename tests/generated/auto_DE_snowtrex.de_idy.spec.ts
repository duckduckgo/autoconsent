import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_snowtrex.de_idy', ['https://www.snowtrex.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
