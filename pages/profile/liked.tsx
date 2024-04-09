import { ChatBubbleOvalLeftEllipsisIcon, HeartIcon } from "@heroicons/react/24/outline";

export default function Liked() {
  return (
    <div className="flex flex-col space-y-5 py-10">
      {[1, 1, 1, 1].map((_, i) => (
        <div
          key={i}
          className="flex px-4 border-b pb-5 border-neutral-600 cursor-pointer justify-between last:border-0"
        >
          <div className="flex space-x-4">
            <div className="w-20 h-20 bg-neutral-600 rounded-md" />
            <div className="pt-2 flex flex-col">
              <h3 className="text-lg font-semibold text-neutral-200">프로젝트 이름</h3>
              <span className="text-xs text-neutral-400">공동주택</span>
              <span className="font-medium mt-1 text-neutral-200">1,209억</span>
            </div>
          </div>
          <div className="flex space-x-2 items-end justify-end">
            <div className="flex space-x-0.5 items-center text-sm text-neutral-400">
              <HeartIcon className="w-4 h-4" />
              <span>1</span>
            </div>
            <div className="flex space-x-0.5 items-center text-sm text-neutral-400">
              <ChatBubbleOvalLeftEllipsisIcon className="w-4 h-4" />
              <span>1</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
