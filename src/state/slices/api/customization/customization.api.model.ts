export interface PutCustomizationBody {
  customization: {
    enabledCoupons: boolean;
    enabledShipping: boolean;
    enabledStorePolicies: boolean;
    enabledTaxSupport: boolean;
    enabledPhoneNumber: boolean;
    brandColor: string;
  };
}
