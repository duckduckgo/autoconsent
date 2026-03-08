import generateCMPTests from '../../playwright/runner';
generateCMPTests(
    'auto_US_bitlife-life-simulator.fandom.com_tq3',
    ['https://bitlife-life-simulator.fandom.com/wiki/BitLife_-_Life_Simulator_Wiki'],
    { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] },
);
