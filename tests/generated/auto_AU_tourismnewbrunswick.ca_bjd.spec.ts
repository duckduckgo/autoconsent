import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_tourismnewbrunswick.ca_bjd', ['https://tourismnewbrunswick.ca/listing/fundy-trail-provincial-park'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
