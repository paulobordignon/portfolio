import { useAlert } from "@src/hooks";

export function Alert() {
  const { error, removeError } = useAlert();

  return error ? (
    <div className="fixed z-10 w-full bottom-7" role="alert">
      <div className="flex max-w-7xl mx-auto p-4 mb-4 text-center bg-yellow-200 rounded-[10px] items-center">
        <div className="ml-3 text-base font-bold text-yellow-700">
          {error.title}{" "}
          <span className="font-medium hover:text-yellow-800">
            {error.text}
          </span>
        </div>
        <button
          type="button"
          className="ml-auto -mx-1.5 -my-1.5 bg-yellow-200 text-yellow-500 rounded-lg focus:ring-2 focus:ring-yellow-400 p-1.5 hover:bg-yellow-300 inline-flex h-8 w-8"
          aria-label="Close"
          onClick={() => removeError()}
        >
          <span className="sr-only">Dismiss</span>
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  ) : null;
}
