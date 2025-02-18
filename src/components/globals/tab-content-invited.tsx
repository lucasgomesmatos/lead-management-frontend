import { Lead } from '@/shared/types/lead';
import { formatDate } from '@/shared/utils/data-utils';

import { sendLeadAccept } from '@/http/send-lead-accept';
import { sendLeadDecline } from '@/http/send-lead-decline';
import { currencyFormatter } from '@/shared/utils/string-utils';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Briefcase, MapPin } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '../ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { Separator } from '../ui/separator';
import { TabsContent } from '../ui/tabs';
import { AvatarUser } from './avatar-user';

interface TabContentInvitedProps {
  lead: Lead;
}

export const TabContentInvited = ({ lead }: TabContentInvitedProps) => {
  const queryClient = useQueryClient();

  const {
    contactFirstName,
    suburb,
    category,
    dateCreated,
    description,
    id,
    price,
  } = lead;

  const { isPending: isPendingAccept, mutateAsync: mutateAsyncAccept } =
    useMutation({
      mutationFn: (leadId: number) => sendLeadAccept({ leadId }),
      onSuccess: () => {
        toast.success('Lead accepted successfully');

        queryClient.invalidateQueries({ queryKey: ['leads', 'invited'] });
      },
      onError: () => {
        toast.error('Failed to accept lead');
      },
    });

  const { isPending: isPendingDecline, mutateAsync: mutateAsyncDecline } =
    useMutation({
      mutationFn: (leadId: number) => sendLeadDecline({ leadId }),
      onSuccess: () => {
        toast.success('Lead declined successfully');

        queryClient.invalidateQueries({ queryKey: ['leads', 'invited'] });
      },
      onError: () => {
        toast.error('Failed to decline lead');
      },
    });

  return (
    <TabsContent value="invited">
      <Card className="w-full">
        <CardHeader className="flex-row gap-4 items-center">
          <CardTitle>
            <AvatarUser url={''} fallback={contactFirstName} />
          </CardTitle>
          <CardDescription>
            <div className="space-y-1">
              <h3 className="font-semibold text-black">{contactFirstName}</h3>
              <p className="text-sm">{formatDate(dateCreated)}</p>
            </div>
          </CardDescription>
        </CardHeader>
        <Separator />
        <CardContent className="p-0">
          <div className="flex gap-4 px-6 py-4">
            <div className="flex items-center gap-2">
              <MapPin className="size-5 text-muted-foreground" />
              <p className="text-muted-foreground">{suburb}</p>
            </div>
            <div className="flex items-center gap-2">
              <Briefcase className="size-5 text-muted-foreground" />
              <p className="text-muted-foreground">{category}</p>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-muted-foreground">Job ID:</p>
              <p className="text-muted-foreground">{id}</p>
            </div>
          </div>
          <Separator />
          <div className="flex gap-4 px-6 py-4">
            <p className="text-muted-foreground text-sm">{description}</p>
          </div>
          <Separator />
        </CardContent>
        <CardFooter className="flex pt-6 gap-4">
          <Button
            disabled={isPendingAccept || isPendingDecline}
            onClick={() => mutateAsyncAccept(lead.id)}
          >
            {isPendingAccept ? 'Accepting...' : 'Accept'}
          </Button>
          <Button
            disabled={isPendingAccept || isPendingDecline}
            onClick={() => mutateAsyncDecline(lead.id)}
            variant="outline"
          >
            {isPendingDecline ? 'Declining...' : 'Decline'}
          </Button>
          <p className="text-accent-foreground">
            <span className="text-muted-foreground font-bold">
              {currencyFormatter(price)}{' '}
            </span>{' '}
            Lead Invitation
          </p>
        </CardFooter>
      </Card>
    </TabsContent>
  );
};
