import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_blumoon.de_853', ['https://blumoon.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
