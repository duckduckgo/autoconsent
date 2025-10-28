import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_arduino.cc_23l', ['https://www.arduino.cc/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
