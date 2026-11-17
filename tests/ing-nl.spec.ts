import generateCMPTests from '../playwright/runner';

const urls = ['https://www.ing.nl/particulier'];

generateCMPTests('ing-nl', urls, { mobile: true });
generateCMPTests('ing-nl', urls, { mobile: false });
