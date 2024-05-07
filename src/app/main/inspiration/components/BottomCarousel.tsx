'use client';

import Link from 'next/link';

import { useQuery } from '@tanstack/react-query';

import { fetchInspiration } from '@/libs';

export default function BottonCarousel() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['inspiration'],
    queryFn: () => fetchInspiration(),
  });

  if (isLoading)
    return (
      <ul className="inline-grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 m-2 gap-2 w-full mx-auto">
        {Array.from({ length: 25 }).map((_, index) => (
          <>
            <div
              className="skeleton w-11/12 h-[40vh] sm:h-[40vw] lg:h-[23vw] bg-gray-200 mt-4 mx-auto"
              key={index}
            ></div>
          </>
        ))}
      </ul>
    );

  return (
    <ul className="inline-grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 m-4 gap-3">
      {data?.data.message.map((item: any) => {
        return <BottomComponent key={Symbol(item).toString()} data={item} />;
      })}
    </ul>
  );
}

{
  /* <ul className="inline-grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 m-4 gap-3">
      {data?.data.message.map((item: any) => {
        return <BottomComponent key={Symbol(item).toString()} data={item} />;
      })}
    </ul> */
}

function BottomComponent({ data }: { data: any }) {
  const url = 'https://mingmeng030.tistory.com/274';

  return (
    <li className="rounded-xl shadow-xl flex-col hover:opacity-50 hover:translate-y-2 hover:delay-100 hover:ease-in-out">
      <Link href={`../External?url=${url}`}>
        <img
          src={data}
          alt=""
          onClick={() => console.log('clicked')}
          className="rounded-t-lg w-full h-[85vw] sm:h-[33vw] lg:h-[20vw] flex-2 object-cover"
        />
      </Link>
      <div className="flex justify-between items-center p-2">
        <div className="flex-1 overflow-hidden whitespace-nowrap my-auto">
          <div className="text-md text-ellipsis overflow-hidden">
            서버 기술 블로그
          </div>
          <div className="text-sm text-gray-400 text-ellipsis overflow-hidden">
            인천대학교 앱센터
          </div>
        </div>
        <button className=" bg-[#78be5e] w-8 h-8 rounded-full shadow-xl text-white text-xl">
          +
        </button>
      </div>
    </li>
  );
}
