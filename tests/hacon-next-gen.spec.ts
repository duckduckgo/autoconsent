import generateCMPTests from '../playwright/runner';

const urls = ['https://www.rejseplanen.dk/', 'https://noevog-in1.verkehrsauskunft.at/'];

generateCMPTests('hacon-next-gen', urls, { mobile: true });
generateCMPTests('hacon-next-gen', urls, { mobile: false });
