import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_airshowdisplay.fr_byn', ['https://airshowdisplay.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
