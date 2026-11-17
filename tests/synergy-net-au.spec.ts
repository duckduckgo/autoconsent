import generateCMPTests from '../playwright/runner';

const urls = ['https://www.synergy.net.au/'];
// the site returns an error page to visitors from some regions, e.g. US
const onlyRegions = ['AU', 'GB', 'DE'];

generateCMPTests('synergy-net-au', urls, { mobile: true, onlyRegions });
generateCMPTests('synergy-net-au', urls, { mobile: false, onlyRegions });
