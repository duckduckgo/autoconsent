import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_tasteofhome.com_6fa', ['https://www.tasteofhome.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
