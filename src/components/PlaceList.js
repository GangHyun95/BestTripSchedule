import React from "react";
import { CiSearch } from "react-icons/ci";
const PlaceList = () => {
  return (
    <section className="text-center">
      <h2 className="text-3xl font-bold ">어디로 여행을 떠나시나요?</h2>
      <p className="text-[#999] text-sm my-5">
        여행지를 검색하거나 목록에서 직접 선택해주세요.
      </p>
      <div className="w-[600px] mx-auto mb-8">
        <form className="relative text-2xl text-[#999]">
          <input
            type="text"
            className="w-full h-16 outline-none border rounded-3xl p-4"
          />
          <CiSearch className="absolute top-2/4 right-3 translate-y-[-50%] text-main" />
        </form>
        <ul className="flex justify-center mt-4 text-sm">
          <li className="bg-main text-white px-6 py-3">전체</li>
          <li className="px-6 py-3">서울/경기</li>
          <li className="px-6 py-3">강원</li>
          <li className="px-6 py-3">충청</li>
          <li className="px-6 py-3">전라</li>
          <li className="px-6 py-3">경상</li>
          <li className="px-6 py-3">제주</li>
        </ul>
      </div>
      <div className="grid grid-cols-4 gap-20">
        <div className="shadow rounded overflow-hidden">
          <div className="overflow-hidden">
            <img
              src="/photo/jeju.jpg"
              alt="임시"
              className="hover:scale-[115%] transition-transform duration-200 ease-in-out"
            />
          </div>
          <div className="p-6 text-start">
            <b className="text-2xl">JEJU</b>
            <br />
            <p className="text-sm my-2">대한민국 제주도</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlaceList;