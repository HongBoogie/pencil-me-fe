'use client';

import { useEffect, useState } from 'react';

import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';

import Cartegory from '@/component/common/Cartegory';

import TodoBox from '../components/TodoBox';

export default function ModifyPage() {
  const item: any = JSON.parse(localStorage.getItem('modifyTodo') || '{}');
  const [loca1, loca2] = item.deadline.split('T');
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const [group, setGroup] = useState<string>();
  const [title, setTitle] = useState<string>();
  const [deadline, setDeadline] = useState<string>();
  const [endTime, setEndTime] = useState<string>();

  // useEffect(() => {
  //   console.log(item);
  //   console.log(group);
  //   console.log(loca1, loca2);
  // }, [group]);

  const { data, isLoading, error } = useQuery({
    queryKey: ['groupName'],
    queryFn: () => {
      return axios.get(`${apiKey}/categories`, {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      });
    },
  });

  const { mutate } = useMutation({
    mutationFn: () => {
      return axios.put(
        `${apiKey}/todos/${item.todoId}`,
        {
          categoryId: group,
          title: title,
          contents: item.contents,
          deadline: deadline + endTime,
          isFinished: false,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: localStorage.getItem('token'),
          },
        },
      );
    },
    onSuccess: () => {
      alert('수정이 완료되었습니다!');
      history.back();
    },
  });

  return (
    <>
      <Cartegory>수정</Cartegory>
      <TodoBox item={item} />
      <div className="flex flex-col h-full">
        <div className="text-xs text-sgray-500 m-2">세부사항</div>
        <div className="flex gap-2 min-h-48 flex-col w-5/6 rounded-2xl bg-white mx-auto">
          <div className="flex flex-row mt-2 ml-4 ">
            <div className="text-xs my-auto">그룹</div>
            <select
              className="ml-auto pt-1 select w-1/3 mr-1 text-xs"
              onChange={(e) => setGroup(e.target.value)}
            >
              <option disabled selected>
                그룹
              </option>
              {data?.data.data.map((item: any, index: number) => (
                <option key={index} value={item.categoryId}>
                  {item.categoryName}
                </option>
              ))}
            </select>
          </div>
          <hr />
          <div className="flex flex-row m-2 my-4 ml-4">
            <div className="text-xs my-auto">종료일</div>
            <input
              type="text"
              className="flex w-1/3 justify-center ml-auto text-xs sm:text-sm"
              placeholder={loca1}
              onChange={(e) => setDeadline(e.target.value)}
            />
          </div>
          <hr />
          <div className="flex flex-row mt-2 ml-4 pb-3 ">
            <div className="text-xs my-auto">종료시간</div>
            <input
              type="text"
              className="flex w-1/3 h-8 justify-center ml-auto text-xs sm:text-sm"
              placeholder={loca2}
              onChange={(e) => setEndTime(e.target.value)}
            />
          </div>
        </div>
        <div className="text-xs text-gray-500 m-2">세부사항</div>
        <textarea
          className="textarea w-5/6 h-1/4 mx-auto"
          placeholder="내용을 입력해주세요"
          onChange={(e) => setTitle(e.target.value)}
        ></textarea>
        <button className="btn bg-accent text-white border-none w-[26%] ml-auto my-4 mr-4">
          수정 완료
        </button>
      </div>
    </>
  );
}
