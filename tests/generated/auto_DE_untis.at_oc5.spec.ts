import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_untis.at_oc5', ['https://www.untis.at/de'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
