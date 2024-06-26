import { useEffect } from 'react';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import useProfileStore from '@/modules/profileStore';

export default function Avatar() {
  const { profileModalOpen, setProfileModalOpen } = useProfileStore();
  const ApiKey = process.env.NEXT_PUBLIC_API_KEY;
  const { data, refetch } = useQuery({
    queryKey: ['member'],
    queryFn: () => {
      return axios.get(`${ApiKey}/members`, {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      });
    },
  });

  useEffect(() => {
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profileModalOpen]);

  return (
    <>
      <div className="flex mt-8 justify-center avatar">
        <div className="flex flex-col w-32 md:w-64 mt-4 rounded-full">
          <div className="w-full h-full rounded-full text-accent bg-accent"></div>
        </div>
      </div>
      <div className="mx-auto my-2 text-xl md:text-3xl text-black">
        {data?.data.data.nickname}
      </div>
    </>
  );
}
