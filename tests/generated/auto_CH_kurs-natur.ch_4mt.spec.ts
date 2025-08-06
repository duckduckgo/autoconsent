import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_kurs-natur.ch_4mt', ['https://kurs-natur.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
