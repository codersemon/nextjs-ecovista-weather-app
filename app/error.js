// directive
"use client";

const ErrorComponent = ({ error, reset }) => {
  return (
    <div className="container h-[95vh] flex justify-center items-center flex-col">
      <p className="text-2xl">{error?.message ?? "Something went wrong!"}</p>

      <div className="flex gap-x-3">
        <button
          onClick={() => reset()}
          className="py-3 px-6 sm:px-8 text-[0.9rem] sm:text-[1rem] rounded-full bg-color-purple hover:bg-color-purple/80 text-white inline-block mt-8"
        >
          Try again
        </button>
      </div>
    </div>
  );
};

export default ErrorComponent;
