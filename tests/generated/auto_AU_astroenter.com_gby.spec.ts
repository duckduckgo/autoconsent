import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_astroenter.com_gby', ['https://astroenter.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
