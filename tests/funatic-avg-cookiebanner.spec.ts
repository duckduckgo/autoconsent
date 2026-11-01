import generateCMPTests from '../playwright/runner';

const urls = ['https://www.geldersevallei.nl/', 'https://www.gelreziekenhuizen.nl/', 'https://www.werkenbijgeldersevallei.nl/'];

generateCMPTests('funatic-avg-cookiebanner', urls, { mobile: true, testSelfTest: false });
generateCMPTests('funatic-avg-cookiebanner', urls, { mobile: false, testSelfTest: false });
