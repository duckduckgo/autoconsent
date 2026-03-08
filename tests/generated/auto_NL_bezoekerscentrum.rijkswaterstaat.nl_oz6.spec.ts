import generateCMPTests from '../../playwright/runner';
generateCMPTests(
    'auto_NL_bezoekerscentrum.rijkswaterstaat.nl_oz6',
    ['https://bezoekerscentrum.rijkswaterstaat.nl/SchipholAmsterdamAlmere/'],
    { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] },
);
