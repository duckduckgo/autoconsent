import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_anwalte-de.com_mtg', ['https://anwalte-de.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
