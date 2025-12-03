import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_asiointi.oikeus.fi_mmx', ['https://asiointi.oikeus.fi/oikeusrekisterikeskus/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
