import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_camperchamp.com_0rf', ['https://camperchamp.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
