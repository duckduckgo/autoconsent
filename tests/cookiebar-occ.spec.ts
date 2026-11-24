import generateCMPTests from '../playwright/runner';

const urls = ['https://colorconsole.de/', 'https://lokal-kabir.de/'];
// these sites reload the page after the click, before the self-test can run
const reloadingUrls = ['https://softwareok.de/', 'https://www.softwareok.com/'];

generateCMPTests('cookiebar-occ', urls, { mobile: true });
generateCMPTests('cookiebar-occ', urls, { mobile: false });
generateCMPTests('cookiebar-occ', reloadingUrls, { mobile: true, testSelfTest: false });
generateCMPTests('cookiebar-occ', reloadingUrls, { mobile: false, testSelfTest: false });
