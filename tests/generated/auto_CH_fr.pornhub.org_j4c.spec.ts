import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_fr.pornhub.org_j4c', ['https://fr.pornhub.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
