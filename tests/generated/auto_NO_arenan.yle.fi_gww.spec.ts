import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_arenan.yle.fi_gww', ['https://arenan.yle.fi/tv'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
