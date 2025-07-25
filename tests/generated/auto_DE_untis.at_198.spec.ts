import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_untis.at_198', ['https://www.untis.at/de'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
