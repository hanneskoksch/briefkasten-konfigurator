
interface HeadingProps  {
    text: string,
}

const Heading = ({text}: HeadingProps) => {
    return (
        <div className="text-center text-gray-800 font-bold text-xl mt-2 mb-1">
            {text}
        </div>
    )
}

export default Heading
