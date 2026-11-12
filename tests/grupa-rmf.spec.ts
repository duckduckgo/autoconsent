import generateCMPTests from '../playwright/runner';

const urls = ['https://www.rmf24.pl/', 'https://www.rmf.fm/', 'https://www.rmfon.pl/', 'https://www.rmfclassic.pl/'];

generateCMPTests('grupa-rmf', urls, { testSelfTest: false });
