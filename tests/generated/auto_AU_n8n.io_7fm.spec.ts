import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_n8n.io_7fm', ['https://n8n.io/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
