import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_doc.traefik.io_gu5', ['https://doc.traefik.io/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
