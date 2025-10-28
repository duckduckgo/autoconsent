import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_alfa.no_slh', ['https://www.alfa.no/en-NO'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
