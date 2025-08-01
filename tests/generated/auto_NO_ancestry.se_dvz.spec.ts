import generateCMPTests from '../../playwright/runner';
generateCMPTests(
    'auto_NO_ancestry.se_dvz',
    ['https://www.ancestry.se/?geo_a=t&geo_s=us&geo_t=se&o_iid=41033&o_lid=41033&o_sch=Web+Property&geo_v=2.0.0'],
    { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] },
);
