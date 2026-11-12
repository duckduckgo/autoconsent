import generateCMPTests from '../playwright/runner';

const urls = ['https://www.comdirect.de/', 'https://magazin.comdirect.de/', 'https://akademie.comdirect.de/'];

generateCMPTests('com-consent-layer', urls, { mobile: false });
generateCMPTests('com-consent-layer', urls, { mobile: true });
