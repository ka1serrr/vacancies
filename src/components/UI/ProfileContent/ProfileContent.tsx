import { useTypedSelector } from '@/imports/hooks';
import { Card } from '@/components/UI/Card/Card';

export const ProfileContent = () => {
  const { items } = useTypedSelector((state) => state.fav);

  // @ts-ignore
  const content = items?.map((item) => <Card key={item.id} {...item} item={item} />);

  return <> {content}</>;
};
