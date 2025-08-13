import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_nelson.nl_mg8', ['https://www.nelson.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
