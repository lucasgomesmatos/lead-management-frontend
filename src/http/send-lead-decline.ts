import { api } from '@/lib/axios';
import { Constants } from '@/shared/constants/constants';

interface SendLeadAccept {
  leadId: number;
}

export async function sendLeadDecline({ leadId }: SendLeadAccept) {
  await api.put(`leads/${leadId}${Constants.URL_SEND_LEAD_ACCEPT}`);
}
