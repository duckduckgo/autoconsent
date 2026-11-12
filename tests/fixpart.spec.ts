import generateCMPTests from '../playwright/runner';

const urls = ['https://fixpart.se/', 'https://fixpart.de/', 'https://fixpart.nl/', 'https://fixpart.fr/'];

generateCMPTests('fixpart', urls, { mobile: true });
generateCMPTests('fixpart', urls, { mobile: false });
