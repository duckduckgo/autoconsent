import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_kurs-natur.ch_a1p', ['https://kurs-natur.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
