import { useEffect, useRef, useState } from 'react';

import useGroupStore from '../../../modules/groupStore';

export type categoryProps = {
  categoryName: string;
};

export default function AddGroupModal(): JSX.Element {
  const { groupModalOpen, setGroupModalClose } = useGroupStore();

  const [groupName, setGroupName] = useState<categoryProps | undefined>();
  const modalBackground = useRef<HTMLDivElement>(null);

  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  const setGroup = async () => {
    if (groupName) {
      console.log(groupName.categoryName);
      await fetch(`${apiKey}categories`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: groupName.categoryName,
        }),
      });
      setGroupModalClose();
    }
  };

  const handleKeyUpInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setGroup();
    }
  };

  return (
    <div
      className="absolute z-10 flex flex-col w-4/5  h-48 -translate-x-1/2 -translate-y-1/2 bg-white shadow-xl top-1/2 left-1/2 rounded-xl md:w-2/5 md:h-52 opacity-100"
      ref={modalBackground}
    >
      <div className="flex justify-center my-4">그룹명</div>
      <input
        type="text"
        placeholder="그룹명을 입력해주세요"
        className="flex w-10/12 mx-auto text-center rounded-lg just-center input input-bordered"
        onChange={(e) => setGroupName({ categoryName: e.target.value })}
        onKeyUp={handleKeyUpInput}
      />
      <div className="flex justify-evenly flex-1 items-center">
        <button className="btn rounded-lg" onClick={setGroup}>
          등록
        </button>
        <button className="btn rounded-lg" onClick={setGroupModalClose}>
          닫기
        </button>
      </div>
    </div>
  );
}
