import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_overleaf.com_i16', ['https://www.overleaf.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
