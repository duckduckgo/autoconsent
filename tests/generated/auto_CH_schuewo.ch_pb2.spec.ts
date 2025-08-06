import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_schuewo.ch_pb2', ['https://www.schuewo.ch/home'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
