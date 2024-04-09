import { ArrowDownTrayIcon, ArrowUpTrayIcon, HeartIcon, StarIcon as EStarIcon } from "@heroicons/react/24/outline";
import { StarIcon as SStarIcon } from "@heroicons/react/24/solid";

export default function Profile() {
  return (<div className="py-10 px-4">
    <div className="flex items-center space-x-3">
      <div className="w-16 h-16 bg-neutral-600 rounded-full" />
      <div className="flex flex-col">
        <span className="font-medium text-neutral-200">사용자</span>
        <span className="text-sm text-neutral-400">프로필 수정 ></span>
      </div>
    </div>
    <div className="mt-10 flex justify-around">
      <div className="flex flex-col items-center">
        <div className="w-14 h-14 text-white bg-blue-600 rounded-full flex items-center justify-center">
          <ArrowDownTrayIcon className="w-6 h-6" />
        </div>
        <span className="text-sm mt-2 font-medium text-neutral-400">판매내역</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-14 h-14 text-white bg-blue-600 rounded-full flex items-center justify-center">
          <ArrowUpTrayIcon className="w-6 h-6" />
        </div>
        <span className="text-sm mt-2 font-medium text-neutral-400">구매내역</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-14 h-14 text-white bg-blue-600 rounded-full flex items-center justify-center">
          <HeartIcon className="w-6 h-6" />
        </div>
        <span className="text-sm mt-2 font-medium text-neutral-400">관심목록</span>
      </div>
    </div>
    {[1, 1, 1, 1].map((_, i) => (
      <div key={i} className="mt-12">
        <div className="flex space-x-4 items-center">
          <div className="w-12 h-12 rounded-full bg-neutral-600" />
          <div>
            <h4 className="text-sm font-bold text-neutral-200">사용자</h4>
            <div className="flex items-center">
              <SStarIcon className="h-5 w-5 text-yellow-400" />
              <EStarIcon className="h-5 w-5 text-neutral-600" />
              <EStarIcon className="h-5 w-5 text-neutral-600" />
              <EStarIcon className="h-5 w-5 text-neutral-600" />
              <EStarIcon className="h-5 w-5 text-neutral-600" />
            </div>
          </div>
        </div>
        <div className="mt-4 text-neutral-400 text-sm">
          <p>
            글 내용
          </p>
        </div>
      </div>
    ))}
  </div>)
}