import { useEffect } from 'react';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export default function Summarize({ url }: { url: string }) {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  const { data, isError, isFetching, refetch } = useQuery({
    queryKey: ['summarize'],
    queryFn: () => {
      return axios.get(`${apiKey}/communicator/summary?url=${url}`, {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      });
    },
  });

  useEffect(() => {
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isError) alert('요약에 실패했습니다. 다시 시도해주세요!');

  if (isFetching)
    return (
      <div className="flex skeleton rounded-b-none flex-col text-gray-400 absolute bottom-[4rem] h-[35vh] w-full bg-white border-t-2  rounded-t-xl">
        <div className=" mx-auto my-8">요약중입니다. 잠시만 기다려주세요!</div>
        <div className="flex w-1/6 mx-auto loading loading-spinner justify-center my-auto text-gray-400 text-md sm:text-2xl md:text-3xl border-t-2"></div>
      </div>
    );

  return (
    <div className="flex flex-col w-full absolute bottom-[4rem] h-[35vh] bg-white rounded-t-xl border-x-1 border-t-2 shadow-sm">
      <div className="flex mx-auto items-center w-3/5 text-gray-600 h-1/5 text-md my-4">
        {data?.data?.data.title}
      </div>
      <hr className="w-4/5 m-2 mx-auto" />
      <div className="text-gray-600 text-sm my-auto sm:text-lg w-5/6 mx-auto">
        {data?.data?.data.contents}
      </div>
    </div>
  );
}
