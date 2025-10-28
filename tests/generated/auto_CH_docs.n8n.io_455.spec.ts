import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_docs.n8n.io_455', ['https://docs.n8n.io/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
