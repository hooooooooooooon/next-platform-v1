import { PhotoIcon } from "@heroicons/react/24/solid";

export default function CreateSolution() {
  return (
    <div className="px-4 py-16">
      <div>
        <label className="w-full cursor-pointer text-neutral-400 hover:border-blue-600 hover:text-blue-700 flex items-center justify-center border-2 border-dashed border-neutral-600 h-48 rounded-md">
          <PhotoIcon className="h-12 w-12" />
          <input className="hidden" type="file" />
        </label>
      </div>
      <div className="my-5">
        <label
          className="mb-1 block text-sm font-medium text-neutral-400"
          htmlFor="profit"
        >
          매출
        </label>
        <div className="rounded-md relative flex items-center shadow-sm">
          <input
            id="profit"
            className="appearance-none pl-7 w-full px-3 py-2 border border-neutral-600 rounded-md shadow-sm placeholder-neutral-600 focus:outline-none focus:ring-blue-600 focus:border-blue-600"
            type="text"
            placeholder="0.00"
          />
          <div className="absolute right-0 pointer-events-none pr-3 flex items-center">
            <span className="text-neutral-600">원</span>
          </div>
        </div>
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium text-neutral-400">설명</label>
        <div>
          <textarea className="mt-1 shadow-sm w-full focus:ring-blue-600 rounded-md border-neutral-400 focus:border-blue-600" rows={4} />
        </div>
      </div>
      <button className="mt-5 w-full bg-blue-600 hover:bg-blue-700 text-neutral-200 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 focus:outline-none">프로젝트 등록하기</button>
    </div>
  );
}
