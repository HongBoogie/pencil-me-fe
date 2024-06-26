'use client';

import Image from 'next/image';

import LoginInput from '@/app/login/components/LoginInput';
import Cartegory from '@/component/common/Cartegory';

import BubbleImage from '../../resources/images/common/BubbleImage.png';

export default function LoginPage() {
  return (
    <div className="flex flex-col h-[90vh]">
      <Cartegory>로그인</Cartegory>
      <div className="flex flex-col my-auto">
        <Image src={BubbleImage} alt="" className="w-3/5 md:w-1/5 mx-auto" />
        <div className="mx-auto text-2xl font-bold">다시 만났네요!</div>
        <LoginInput />
      </div>
    </div>
  );
}
