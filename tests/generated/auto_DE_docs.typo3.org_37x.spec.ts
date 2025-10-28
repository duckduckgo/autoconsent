import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_docs.typo3.org_37x', ['https://docs.typo3.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
