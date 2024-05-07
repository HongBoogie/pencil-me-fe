import Link from 'next/link';
import React, { PropsWithChildren } from 'react';
import { IoIosArrowBack } from 'react-icons/io';

export default function Cartegory({
  children,
}: PropsWithChildren): React.ReactElement {
  return (
    <div className="flex flex-row h-12 py-4 justify-center sticky top-0 bg-gray-100 border-b-4 border-gray-100 z-50">
      {children === '메인' ? (
        <Link href="../group" className="absolute left-0 ">
          <button className="mr-auto border-none shadow-none btn btn-sm bg-inherit text-lime-500 text-lg">
            <IoIosArrowBack className="w-5 h-5 mr-[-12px]" />
            그룹
          </button>
        </Link>
      ) : children === '수정' ? (
        <Link href="/main" className="absolute left-0 ">
          <button className="mr-auto border-none shadow-none btn btn-sm bg-inherit text-lime-500">
            <IoIosArrowBack className="w-4 h-4 mr-[-6px]" />
            오늘
          </button>
        </Link>
      ) : children === '디테일' ? (
        <Link href="/main/inspiration" className="absolute left-0 ">
          <button className="mr-auto border-none shadow-none btn btn-sm bg-inherit text-lime-500 text-lg">
            <IoIosArrowBack className="w-6 h-6 mr-[-10px] mt-[1px]" />
            영감
          </button>
        </Link>
      ) : (
        ''
      )}
      <div className=" text-lg sm:text-xl">{children}</div>
    </div>
  );
}
