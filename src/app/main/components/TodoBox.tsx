import { FaRegStar, FaStar } from 'react-icons/fa';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

// Reg는 빈별
import { TodoItem } from '@/modules/todayStore';

export default function TodoBox({ item }: { item: TodoItem }) {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  const { data } = useQuery({
    queryKey: ['categoryName'],
    queryFn: () => {
      try {
        return axios.get(`${apiKey}/categories/${item.categoryId}`, {
          headers: {
            Authorization: localStorage.getItem('token'),
          },
        });
      } catch (e) {
        console.log(e);
      }
    },
  });

  return (
    <>
      <li
        key={item.categoryId}
        className="flex items-center h-16 gap-2 p-2 bg-white border-t border-gray-200"
      >
        <button className="w-4 h-4 border-2 border-gray-400 rounded-full" />
        <div className="flex flex-col">
          <div className="text-gray-700">{item.title}</div>
          <div className="text-sm text-gray-400">{item.deadline}</div>
        </div>
        <div className="ml-auto text-gray-500">
          {data?.data.data.categoryName}
        </div>
        <button className="w-4 h-4 m-2 text-gray-500">
          {item.isImportant ? (
            <FaStar className="text-[#78be5e]" />
          ) : (
            <FaRegStar />
          )}
        </button>
      </li>
    </>
  );
}
