import generateCMPTests from "./runner";

generateCMPTests('com_optanon', [
    'https://www.cancer.org/',
    'https://www.myfonts.com/',
    'https://developer.atlassian.com/',
], {
    testOptOut: false,
    testSelfTest: false,
    skipRegions: ["US", "GB"]
});
