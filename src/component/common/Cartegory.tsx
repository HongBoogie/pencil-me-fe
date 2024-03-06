import Link from 'next/link';
import React, { PropsWithChildren } from 'react';
import { IoIosArrowBack } from 'react-icons/io';

export default function Cartegory({
  children,
}: PropsWithChildren): React.ReactElement {
  return (
    <div className="flex flex-row justify-center h-8">
      {children === '오늘' ? (
        <Link href="../group" className="absolute left-0 ">
          <button className="mr-auto border-none shadow-none btn btn-sm bg-inherit text-lime-500">
            <IoIosArrowBack className="w-4 h-4 mr-[-6px]" />
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
      ) : (
        ''
      )}
      <div className="mt-1 text-md sm:text-lg">{children}</div>
    </div>
  );
}
