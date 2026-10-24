import generateCMPTests from '../playwright/runner';

const urls = ['https://www.mercedes-benz.dk/', 'https://www.mercedes-benz.de/', 'https://www.mercedes-benz.co.uk/'];

generateCMPTests('mercedes-benz-cmm', urls, { mobile: true });
generateCMPTests('mercedes-benz-cmm', urls, { mobile: false });
