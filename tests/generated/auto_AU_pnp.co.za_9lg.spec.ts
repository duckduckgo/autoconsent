import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_pnp.co.za_9lg', ['https://www.pnp.co.za/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
