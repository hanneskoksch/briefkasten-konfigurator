interface HeadingProps {
  text: string;
}

const Heading = ({ text }: HeadingProps) => {
  return (
    <div className="mt-2 mb-1 text-center text-xl font-bold text-gray-800">
      {text}
    </div>
  );
};

export default Heading;
