import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CampaignState {
    active: boolean;
    campaign_name: string;
    campaign_type: string;
    charset: string;
    charset_value: string;
    code_count: number;
    code_length: number;
    code_redemption_limit: number;
    code_type: boolean;
    description: string;
    discount_amount: number;
    discount_method: string;
    discount_type: string;
    discount_value: string;
    expiration_date: string;
    keep_valid: boolean;
    lab_id: string;
    metadata: string;
    package: string;
    pattern: string;
    postfix: string;
    prefix: string;
    product_list: string;
    reedem_count_per_user: number;
    start_date: string;
}

const initialState: CampaignState = {
    active: false,
    campaign_name: "",
    campaign_type: "",
    charset: "",
    charset_value: "",
    code_count: 0,
    code_length: 0,
    code_redemption_limit: 0,
    code_type: false,
    description: "",
    discount_amount: 0,
    discount_method: "",
    discount_type: "",
    discount_value: "",
    expiration_date: "",
    keep_valid: false,
    lab_id: "",
    metadata: "",
    package: "",
    pattern: "",
    postfix: "",
    prefix: "",
    product_list: "",
    reedem_count_per_user: 0,
    start_date: "",
};

const campaignSlice = createSlice({
    name: "campaign",
    initialState,
    reducers: {
        setCampaign(state, action: PayloadAction<CampaignState>) {
            return { ...state, ...action.payload };
        },
        resetCampaign() {
            return initialState;
        },
    },
});

export const { setCampaign, resetCampaign } = campaignSlice.actions;
export default campaignSlice.reducer;
