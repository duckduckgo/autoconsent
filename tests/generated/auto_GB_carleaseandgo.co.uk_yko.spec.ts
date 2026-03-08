import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_carleaseandgo.co.uk_yko', ['https://carleaseandgo.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
