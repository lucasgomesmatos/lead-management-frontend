import { ScrollArea } from '@/components/ui/scroll-area';
import { useQuery } from '@tanstack/react-query';
import { TabContentAccepted } from './components/globals/tab-content-accepted';
import { TabContentInvited } from './components/globals/tab-content-invited';
import { TabContentSkeleton } from './components/globals/tab-content-skeleton';
import { Tabs, TabsList, TabsTrigger } from './components/ui/tabs';
import { useUrlParams } from './hooks/use-url-params';
import { getLeads } from './http/get-leads';

export const App = () => {
  const [selectedTab, setSelectedTab] = useUrlParams('tab', 'invited');

  const { data, isLoading } = useQuery({
    queryKey: ['leads', selectedTab],
    queryFn: () =>
      getLeads({
        status: selectedTab,
      }),
  });

  return (
    <div className="mx-auto p-6 max-w-5xl font-inter">
      <Tabs
        value={selectedTab}
        onValueChange={setSelectedTab}
        className="w-full"
      >
        <div className="sticky top-0 bg-white z-10">
          <TabsList className="w-full h-14 shadow-md">
            <TabsTrigger
              className="w-1/2 h-12 data-[state=active]:border-b-2 data-[state=active]:border-orange-400"
              value="invited"
              onClick={() => setSelectedTab('invited')}
            >
              Invited
            </TabsTrigger>
            <TabsTrigger
              className="w-1/2 h-12 data-[state=active]:border-b-2 data-[state=active]:border-orange-400"
              value="accepted"
              onClick={() => setSelectedTab('accepted')}
            >
              Accepted
            </TabsTrigger>
          </TabsList>
        </div>
        <ScrollArea className="whitespace-nowrap h-3/4 overflow-auto p-4 bg-zinc-100">
          {isLoading ? (
            Array.from({ length: 3 }).map((_, index) => (
              <TabContentSkeleton key={index} value={selectedTab} />
            ))
          ) : (
            <>
              {data?.map((lead) => (
                <TabContentInvited key={lead.id} lead={lead} />
              ))}
              {data?.map((lead) => (
                <TabContentAccepted key={lead.id} lead={lead} />
              ))}
            </>
          )}
        </ScrollArea>
      </Tabs>
    </div>
  );
};
