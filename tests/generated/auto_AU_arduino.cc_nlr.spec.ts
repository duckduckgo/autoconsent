import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_arduino.cc_nlr', ['https://www.arduino.cc/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['AU'] });
