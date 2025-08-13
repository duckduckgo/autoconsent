import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_color.adobe.com_2tt', ['https://color.adobe.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
