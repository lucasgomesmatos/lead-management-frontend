import { api } from '@/lib/axios';
import { Constants } from '@/shared/constants/constants';
import { Lead } from '@/shared/types/lead';

interface GetLeads {
  status?: string;
}

export async function getLeads({ status }: GetLeads): Promise<Lead[]> {
  const { data } = await api.get(Constants.URL_GET_LEADS, {
    params: {
      status: status
        ? status.charAt(0).toUpperCase() + status.slice(1)
        : 'Invited',
    },
  });

  return data;
}
