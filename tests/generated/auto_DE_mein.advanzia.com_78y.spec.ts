import generateCMPTests from '../../playwright/runner';
generateCMPTests(
    'auto_DE_mein.advanzia.com_78y',
    [
        'https://id.advanzia.com/Login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3Dweb%26redirect_uri%3Dhttps%253A%252F%252Fmein.advanzia.com%252Fsignin-oidc%26response_type%3Dcode%26scope%3Dopenid%2520profile%26code_challenge%3DNyhG4QJeU1V6vf23VBM-QzZfZCgM3eeGIFE4Ut-D1bs%26code_challenge_method%3DS256%26response_mode%3Dform_post%26nonce%3D638951048774947970.MjI0ZWUwYTEtM2VkYi00ZWExLWE5MzctODg5MWFjOGE1NGM1ZWNmZGZjODEtMzI4NS00YzBlLWI4NjUtNDU5ZTg4NzhiMmVk%26login_hint%3DBrand%253AAdv;Channel%253AWebApp;ProductGroup%253AAdvanziaCreditCard;Market%253AGermany;Language%253AGerman%26state%3DCfDJ8MVxHMG2sSRDvM2i0ggRHcW1D6qvEvwTZWBNvqsEFNCV-s8hToqDpTMxRClP_Ahinm90XOPScegtFBTnscU6Kp10Y7j9nPUCJKzLP_mRVmiW68JS8ZbZhr6-SdVqmtpS492hHDWkgvZWqvB_KHcEhs0cRtCYenXQ5bnGzId1G6VkbPUD4jgMafNCcejUtQIZbHbkI6Iu5lxHO1xWe4lE8pvfw8puco1e33WCatDHgoB_11Skh2_JoSTdDkZXrsqJes_h_IfsN4aDEaWPjo5JY7toxosITCgUkKcGUY_8pW07LdnjLb0aebvysGm4HV3UfX6DuZa_YGWb5RHLe34hi2j8pJs1M30D99vI70anurIxMpYVp9h0p8o_I25ESEtKhQ%26x-client-SKU%3DID_NET8_0%26x-client-ver%3D7.1.2.0',
    ],
    { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] },
);
