import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_tvlibertes.com_xgs', ['https://tvl.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
