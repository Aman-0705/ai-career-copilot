const Button = ({text}) => {
    return(
        <button
        className="
        bg-gradient-to-r
        from-purple-400
        to-blue-400
        rounded-xl
        font-semibold
        px-6
        py-3
        hover:scale-105
        hover:shadow-purple-500/30
        hover:brightness-110
        hover:shadow-2xl
        transition
        duration-300
        "
        >
            {text}
        </button>
    );
};
export default Button; 