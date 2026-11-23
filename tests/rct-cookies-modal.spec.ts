import generateCMPTests from '../playwright/runner';

const urls = [
    'https://www.protilertools.co.uk/',
    'https://www.ctdtiles.co.uk/',
    'https://www.premiumtiletrim.co.uk/',
    'https://www.warmfloorstore.co.uk/',
    'https://www.northantstools.com/',
    'https://www.flooringmaterials.co.uk/',
];

generateCMPTests('rct-cookies-modal', urls, { mobile: true });
generateCMPTests('rct-cookies-modal', urls, { mobile: false });
