import db from "@/lib/db";
import {
  HeartIcon,
  PlusIcon,
  ChatBubbleOvalLeftEllipsisIcon,
} from "@heroicons/react/24/outline";
import { Prisma } from "@prisma/client";
import Link from "next/link";

async function getInitialProducts() {
  const products = await db.product.findMany({
    select: {
      title: true,
      price: true,
      created_at: true,
      photo: true,
      id: true,
    },
    orderBy: {
      created_at: "desc",
    },
  });
  return products;
}

export type InitialProducts = Prisma.PromiseReturnType<
  typeof getInitialProducts
>;

export const metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <div>
      <Link href="/products/add" className="flex gap-5">
        <div className="flex flex-col w-full pt-5 px-5">
          <div className="text-neutral-600 w-full flex flex-col items-center justify-center rounded-md border-[1px] border-dashed border-neutral-600 pb-5 hover:border-neutral-500 hover:text-neutral-500">
            <PlusIcon className="h-12" />
            <div className="text-sm">신규 프로젝트를 추가해주세요.</div>
          </div>
          {[1, 1, 1, 1, 1, 1, 1].map((_, i) => (
            <div
              key={i}
              className="flex px-4 border-b  border-neutral-800 border-dashed py-2 cursor-pointer justify-between last:border-0"
            >
              <div className="flex space-x-4">
                <div className="w-20 h-20 bg-neutral-600 rounded-md" />
                <div className="pt-2 flex flex-col">
                  <h3 className="text-sm font-medium text-neutral-200">
                    GBC 복합부지 개발계획
                  </h3>
                  <span className="text-xs text-neutral-400">Black</span>
                  <span className="font-medium mt-1 text-neutral-200">$95</span>
                </div>
              </div>
              <div className="flex space-x-2 items-end justify-end">
                <div className="flex space-x-0.5 items-center text-sm text-neutral-600">
                  <HeartIcon className="w-4 h-4" />
                  <span>1</span>
                </div>
                <div className="flex space-x-0.5 items-center text-sm text-neutral-600">
                  <ChatBubbleOvalLeftEllipsisIcon className="w-4 h-4" />
                  <span>1</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Link>
    </div>
  );
}
