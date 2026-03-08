import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_4taktwinkel.nl_9i3', ['https://4taktwinkel.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
