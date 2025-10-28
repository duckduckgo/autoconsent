import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_recording.de_r0g', ['https://recording.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
