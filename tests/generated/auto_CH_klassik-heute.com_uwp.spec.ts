import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_klassik-heute.com_uwp', ['http://www.klassik-heute.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
