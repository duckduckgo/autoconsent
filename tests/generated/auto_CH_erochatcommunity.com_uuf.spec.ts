import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_erochatcommunity.com_uuf', ['https://erochatcommunity.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
