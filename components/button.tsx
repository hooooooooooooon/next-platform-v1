interface ButtonProps {
  text: string;
  [key: string]: any;
}

export default function Button({ text, ...rest }: ButtonProps) {
  return (
    <button className="primary-btn h-10 disabled:bg-neutral-500 disabled:text-neutral-200 disabled:cursor-not-allowed">
      {text}
    </button>
  );
}
