import {useTypedSelector} from "@/hooks/useTypedSelector";

export const useItems = (id: any) => {
  const {items} = useTypedSelector(state => state.fav)
  return items.some(item => item.id === id)
}

