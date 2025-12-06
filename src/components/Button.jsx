export const Button = ({
    className = '',
    children,
    ...props
}) => {
    return (
        <button
            {...props}
            className={[
                'px-4 py-2 font-semibold rounded-full border-2',
                'bg-red-600 text-white border-white shadow-md',
                'hover:bg-red-500 hover:scale-105 transition-all duration-200',
                className
            ].join(' ')}>
            {children}
        </button>
    );
};
