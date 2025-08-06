import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_verbund.edeka_gdd', ['https://verbund.edeka/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
