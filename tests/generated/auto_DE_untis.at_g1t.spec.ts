import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_untis.at_g1t', ['https://www.untis.at/de'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
