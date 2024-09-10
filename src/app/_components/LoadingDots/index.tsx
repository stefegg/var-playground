const LoadingDots = () => {
  return (
    <div className="flex space-x-2 justify-center items-center dark:invert">
      <div className="h-4 w-4 bg-blue rounded-full animate-bounce [animation-delay:-0.3s]"></div>
      <div className="h-4 w-4 bg-blue rounded-full animate-bounce [animation-delay:-0.15s]"></div>
      <div className="h-4 w-4 bg-blue rounded-full animate-bounce"></div>
    </div>
  );
};

export default LoadingDots;
