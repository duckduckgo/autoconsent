import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_wiley.com_a4l', ['https://www.wiley.com/en-au/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
