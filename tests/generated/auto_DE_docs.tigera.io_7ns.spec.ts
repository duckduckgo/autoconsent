import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_docs.tigera.io_7ns', ['https://docs.tigera.io/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
