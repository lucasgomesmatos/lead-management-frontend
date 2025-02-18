import { TabsContent } from '../ui/tabs';

import { Lead } from '@/shared/types/lead';
import { formatDate } from '@/shared/utils/data-utils';
import { currencyFormatter } from '@/shared/utils/string-utils';
import { Separator } from '@radix-ui/react-separator';
import { Briefcase, Mail, MapPin, Phone } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { AvatarUser } from './avatar-user';

interface TabContentAcceptedProps {
  lead: Lead;
}

export const TabContentAccepted = ({ lead }: TabContentAcceptedProps) => {
  const {
    contactFirstName,
    contactFullName,
    dateCreated,
    suburb,
    category,
    description,
    id,
    price,
    email,
    phoneNumber,
  } = lead;

  return (
    <TabsContent value="accepted">
      <Card className="w-full">
        <CardHeader className="flex-row gap-4 items-center">
          <CardTitle>
            <AvatarUser url={''} fallback={contactFirstName} />
          </CardTitle>
          <CardDescription>
            <div className="space-y-1">
              <h3 className="font-semibold text-black">{contactFullName}</h3>
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
            <div className="flex items-center gap-2">
              <p className="text-muted-foreground">
                {currencyFormatter(price)}
              </p>
              <p className="text-muted-foreground">Lead Invitation</p>
            </div>
          </div>
          <Separator />
          <div className="flex gap-4 px-6 py-4">
            <div className="flex items-center gap-2">
              <Phone className="size-5 text-muted-foreground" />
              <span className="text-orange-500 font-semibold">
                {phoneNumber}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Mail className="size-5 text-muted-foreground" />
              <span className="text-orange-500 font-semibold">{email}</span>
            </div>
          </div>
          <div className="flex px-6 py-4">
            <p className="text-muted-foreground text-sm">{description}</p>
          </div>
        </CardContent>
      </Card>
    </TabsContent>
  );
};
