import { stripeApi } from '..';
import { PutCustomizationBody } from './customization.api.model';
import { Customization } from '@models/customization.model';

export const customizationApi = stripeApi.injectEndpoints({
  endpoints: builder => ({
    updateCustomization: builder.mutation<Customization, PutCustomizationBody>({
      query: customizationBody => ({
        url: 'customization',
        method: 'PUT',
        body: customizationBody
      })
    })
  }),
  overrideExisting: false
});

export const { useUpdateCustomizationMutation } = customizationApi;
