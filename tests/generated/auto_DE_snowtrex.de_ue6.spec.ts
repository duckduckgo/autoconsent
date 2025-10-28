import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_snowtrex.de_ue6', ['https://www.snowtrex.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
