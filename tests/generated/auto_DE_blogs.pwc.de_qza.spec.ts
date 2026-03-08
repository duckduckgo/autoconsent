import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_blogs.pwc.de_qza', ['https://blogs.pwc.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
