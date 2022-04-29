import generateCMPTests from "./runner";

generateCMPTests('com_optanon', [
    'https://developer.atlassian.com/',
], {
    testOptOut: false,
    testSelfTest: false,
    skipRegions: ["US", "GB"]
});
