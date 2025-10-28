import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_boto3.amazonaws.com_68b', ['https://boto3.amazonaws.com/v1/documentation/api/latest/index.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
