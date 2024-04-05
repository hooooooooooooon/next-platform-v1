interface ButtonProps {
  text: string;
}

export default function Button({ text }: ButtonProps) {
  return (
    <button className="primary-btn h-10 disabled:bg-neutral-500 disabled:text-neutral-200 disabled:cursor-not-allowed">
      {text}
    </button>
  );
}
