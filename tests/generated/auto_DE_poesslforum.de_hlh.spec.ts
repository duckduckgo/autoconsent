import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_poesslforum.de_hlh', ['https://poesslforum.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
