export default function Edit() {
  return (
    <div className="py-10 px-4 space-y-4">
      <div className="flex items-center space-x-3">
        <div className="w-14 h-14 rounded-full bg-neutral-600" />
        <label
          htmlFor="picture"
          className="cursor-pointer py-2 px-3 border border-neutral-600 rounded-md shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 text-netural-400"
        >
          프로필사진 수정
          <input id="picture" type="file" className="hidden" accept="image/*" />
        </label>
      </div>
      <div className="space-y-1">
        <label htmlFor="email" className="text-sm font-medium text-neutral-200">
          이메일 주소
        </label>
        <input
          id="email"
          type="email"
          className="appearance-none w-full px-3 py-2 border border-neutal-600 rounded-md shadow-sm placeholder-neutral-600 focus:outline-none focus:ring-blue-600 focus:border-blue-600"
          placeholder="someone@alphaka.com"
          required
        />
      </div>
      <div className="space-y-1">
        <label htmlFor="phone" className="text-sm font-medium text-neutral-200">
          휴대폰 번호
        </label>
        <div className="flex rounded-md shadow-sm">
          <span className="flex items-center justify-center px-3 rounded-l-md border border-r-0 border-neutral-600 bg-neutral-800 select-none text-sm">
            +82
          </span>
          <input
            id="input"
            type="number"
            className="appearance-none w-full px-3 py-2 border border-neutral-400 rounded-md rounded-l-none shadow-sm placeholder-neutral-600 focus:outline-none focus:ring-blue-600 focus:border-blue-600"
            placeholder="010-0000-0000"
            required
          />
        </div>
      </div>
      <button className="mt-5 w-full bg-blue-600 hover:bg-blue-700 text-neutral-200 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 focus:outline-none">
        프로필 업데이트
      </button>
    </div>
  );
}
