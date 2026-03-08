import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_etd.hf.uio.no_tvr', ['https://etd.hf.uio.no/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
