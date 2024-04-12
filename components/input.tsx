import { LockClosedIcon, PencilIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface InputProps {
  name: string;
  register: UseFormRegisterReturn;
  required: boolean;
  type: string;
  errors?: string[];
}

export default function Input({
  name,
  register,
  required,
  type,
  errors = [],
}: InputProps & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="flex flex-col gap-2">
      <div className="relative mt-4">
        <input
          id={name}
          required={required}
          type={type}
          {...register}
          className="peer/input relative z-[5px] w-full border-b-[1px] border-b-neutral-400 bg-none pb-2 text-base text-neutral-400 placeholder:text-neutral-400 focus:outline-none"
        />
        <label htmlFor={name} className="pointer-events-none absolute bottom-2 left-2 z-0 text-base capitalize text-neutral-400 transition-all duration-300 peer-valid/input:bottom-8 peer-valid/input:text-xs peer-valid/input:font-bold peer-focus/input:bottom-8 peer-focus/input:text-xs peer-focus/input:font-bold peer-focus/input:text-[#120A8F]">
          {name}
        </label>
        <span className="absolute bottom-0 left-0 block h-0.5 w-0 rounded-sm bg-[#120A8F] duration-300 peer-focus/input:w-full"></span>
        <div className="absolute right-0 bottom-3">
          {name === "이메일" ? (
            <UserCircleIcon className="w-5 h-5 text-neutral-400" />
          ) : name === "비밀번호" ? (
            <LockClosedIcon className="w-5 h-5 text-neutral-400" />
          ) : <PencilIcon className="w-4 h-4 text-neutral-400" />}
        </div>
      </div>
      {errors.map((error, index) => (
        <span key={index} className="text-red-500 font-medium">
          {error}
        </span>
      ))}
    </div>
  );
}
