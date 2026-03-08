import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_bikegearratio.com_66n', ['https://bikegearratio.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
