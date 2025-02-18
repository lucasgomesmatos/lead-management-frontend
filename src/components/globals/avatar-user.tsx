import { formatName } from '@/shared/utils/string-utils';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

interface AvatarUserProps {
  url: string;
  fallback: string;
}

export const AvatarUser = ({ url, fallback }: AvatarUserProps) => {
  return (
    <Avatar>
      <AvatarImage src={url} />
      <AvatarFallback>{formatName(fallback)}</AvatarFallback>
    </Avatar>
  );
};
