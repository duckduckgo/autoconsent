import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_dashlane.com_054', ['https://www.dashlane.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
