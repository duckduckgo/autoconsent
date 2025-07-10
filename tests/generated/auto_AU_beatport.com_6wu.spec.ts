import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_beatport.com_6wu', ['https://www.beatport.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['AU'] });
