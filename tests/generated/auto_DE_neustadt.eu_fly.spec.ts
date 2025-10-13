import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_neustadt.eu_fly', ['https://www.neustadt.eu/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
