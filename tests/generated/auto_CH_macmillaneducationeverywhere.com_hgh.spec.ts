import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_macmillaneducationeverywhere.com_hgh', ['https://www.macmillaneducationeverywhere.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
