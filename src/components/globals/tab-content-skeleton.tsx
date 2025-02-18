import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { Separator } from '../ui/separator';
import { Skeleton } from '../ui/skeleton';
import { TabsContent } from '../ui/tabs';

interface TabContentInvitedProps {
  value: string;
}

export const TabContentSkeleton = ({ value }: TabContentInvitedProps) => {
  return (
    <TabsContent value={value}>
      <Card className="w-full">
        <CardHeader className="flex-row gap-4 items-center">
          <CardTitle>
            <Skeleton className="h-12 w-12 rounded-full" />
          </CardTitle>
          <CardDescription>
            <div className="space-y-1">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </CardDescription>
        </CardHeader>
        <Separator />
        <CardContent className="p-0">
          <Skeleton className="h-4 py-12" />
          <Separator />
        </CardContent>
        <CardFooter className="flex pt-6 gap-4">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </CardFooter>
      </Card>
    </TabsContent>
  );
};
