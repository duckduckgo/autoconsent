import generateCMPTests from '../playwright/runner';

// The consent form submits and reloads the page, so the self-test never runs
const urls = [
    'https://www.scienceforums.net/',
    'https://customsforge.com/',
    'https://www.webastro.net/forums/',
    'https://www.windows-noob.com/forums/',
    'https://www.higherlevel.nl/forums/',
];

generateCMPTests('invision-community', urls, { mobile: true, testSelfTest: false });
generateCMPTests('invision-community', urls, { mobile: false, testSelfTest: false });
