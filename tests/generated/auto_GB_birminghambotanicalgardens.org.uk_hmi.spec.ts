import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_birminghambotanicalgardens.org.uk_hmi', ['https://birminghambotanicalgardens.org.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
