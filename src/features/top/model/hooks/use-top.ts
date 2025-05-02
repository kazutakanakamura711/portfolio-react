import { useGetWorks } from '@/shared/model/hooks/use-get-works';

export const useTop = () => {
  return useGetWorks();
};
