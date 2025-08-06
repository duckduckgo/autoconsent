import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_fr.pornhub.org_in3', ['https://fr.pornhub.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
