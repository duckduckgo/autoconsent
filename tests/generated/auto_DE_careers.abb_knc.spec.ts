import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_careers.abb_knc', ['https://careers.abb/dach/de'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
