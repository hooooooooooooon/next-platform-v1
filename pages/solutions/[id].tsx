import { HeartIcon } from "@heroicons/react/24/outline";

export default function Solution() {
  return (
    <div className="px-4 py-10">
      <div className="mb-8">
        <div className="h-96 bg-neutral-600" />
        <div className="flex cursor-pointer py-3 border-b border-neutral-600 items-center space-x-3">
          <div className="w-12 h-12 rounded-full bg-neutral-600" />
          <div>
            <p className="text-sm font-medium text-neutral-400">사용자</p>
            <p className="text-xs font-medium text-neutral-600">
              사용자 정보 보기
            </p>
          </div>
        </div>
        <div className="mt-5">
          <h1 className="text-3xl font-bold text-neutral-200">
            GBC 복합부지 개발계획
          </h1>
          <span className="text-3xl block mt-3 text-neutral-200">
            수익 1,253억
          </span>
          <p className="my-6 text-neutral-200">My son</p>
          <div className="flex items-center justify-between space-x-2">
            <button className="flex-1 bg-blue-600 text-neutral-200 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 font-medium hover:bg-blue-700 focus:ring-blue-600">
              채팅하기
            </button>
            <button className="p-3 rounded-md flex items-center justify-center text-neutral-600 hover:bg-neutral-700 hover:text-neutral-400">
              <HeartIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-bold text-neutral-400">유사 프로젝트</h2>
        <div className="mt-6 grid grid-cols-2 gap-4">
          {[1, 2, 3, 4, 5, 6].map((_, i) => (
            <div key={i}>
              <div className="h-56 w-full mb-4 bg-neutral-600" />
              <h3 className="text-neutral-400 -mb-1">프로젝트 이름</h3>
              <span className="text-sm font-medium text-neutral-600">$6</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
