import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_cottonique.com_8jy', ['https://cottonique.ca/?shpxid=0a47ab73-d5b1-4ddf-86c5-470f5a4a175e'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
