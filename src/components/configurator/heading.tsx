interface HeadingProps {
  text: string;
}

const Heading = ({ text }: HeadingProps) => {
  return (
    <div className="mb-1 mt-2 text-center text-xl font-bold text-gray-800">
      {text}
    </div>
  );
};

export default Heading;
