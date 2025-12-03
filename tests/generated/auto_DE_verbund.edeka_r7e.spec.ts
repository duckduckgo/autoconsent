import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_verbund.edeka_r7e', ['https://verbund.edeka/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
