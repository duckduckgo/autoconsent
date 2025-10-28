import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_silkeschaefer.com_z60', ['https://silkeschaefer.com/de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
