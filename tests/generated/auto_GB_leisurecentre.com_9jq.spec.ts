import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_leisurecentre.com_9jq', ['https://www.leisurecentre.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
