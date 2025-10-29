import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_velux.com.au_dag', ['https://www.velux.com.au/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
