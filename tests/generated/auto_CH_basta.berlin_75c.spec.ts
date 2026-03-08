import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_basta.berlin_75c', ['https://basta.berlin/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
