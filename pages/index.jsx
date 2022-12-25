import Link from "next/link";
import { useLocalStorage } from "../core/use-local-storage";

export default function Home() {
  const [space, setSpace] = useLocalStorage("space", [
    {
      name: "Joy-Pacheco__Resume.pdf",
      url: "https://um3j4glmpqmw3d545gwsn57vrayfaxonqno42xzd2zyi6xmm5vpq.arweave.net/ozaeGWx8GW2PvOmtJvf1iDBQXc2DXc1fI9Zwj12M7V8",
    },
  ]);

  return (
    <div className="min-h-screen bg-black-5">
      <div className="mx-auto flex max-w-lg flex-col gap-4 p-4">
        <header className="flex justify-end gap-2">
          <span className="rounded-lg border border-black-20 bg-black-0 px-2 py-1 text-base text-black-70 shadow-sm">
            0.123 SPB
          </span>
          <span className="rounded-lg bg-blue-20 p-2 text-blue-50 shadow-sm">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.03096 7.34826C7.69932 3.2348 4.256 0 0.0571432 0C0.0571432 4.17939 3.26202 7.61025 7.34826 7.96902C3.2348 8.30064 1.83538e-07 11.744 0 15.9429C4.17939 15.9429 7.61025 12.738 7.96902 8.65176C8.30064 12.7652 11.744 16 15.9429 16C15.9429 11.8206 12.738 8.38976 8.65176 8.03096C12.7652 7.69933 16 4.256 16 0.0571429C11.8206 0.0571426 8.38976 3.26202 8.03096 7.34826ZM7.9998 8.00016C7.99972 8.00016 7.99993 8.00016 7.9998 8.00016Z"
                fill="currentColor"
              />
            </svg>
          </span>
          <button className="rounded-lg bg-red-50 p-2 text-red-10 shadow-sm">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.6667 11.3334L14.0001 8.00002L10.6667 4.66669"
                stroke="currentColor"
                strokeWidth="1.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14 8H6"
                stroke="currentColor"
                strokeWidth="1.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V3.33333C2 2.97971 2.14048 2.64057 2.39052 2.39052C2.64057 2.14048 2.97971 2 3.33333 2H6"
                stroke="currentColor"
                strokeWidth="1.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </header>
        <main className="flex flex-col gap-4">
          <form className="flex gap-2">
            <label className="group flex flex-1 rounded-lg shadow-sm">
              <span className="rounded-l-lg border-y border-l border-black-20 bg-black-0 py-2 px-3 text-base text-black-60 group-focus-within:border-blue-50">
                SPB
              </span>
              <input
                type="number"
                className="flex-1 rounded-r-lg border border-black-20 bg-black-0 py-2 px-3 text-base text-black-60 placeholder:text-black-40 focus:outline-none group-focus-within:border-y-blue-50 group-focus-within:border-r-blue-50"
                placeholder="0.000"
              />
            </label>
            <button
              type="submit"
              className="rounded-lg border border-black-20 bg-black-0 px-4 py-2 text-base font-medium shadow-sm"
            >
              Fund
            </button>
          </form>
        </main>
        <ul className="flex flex-col gap-2 rounded-lg border border-black-20 bg-black-0 p-4 shadow-sm">
          {space.map((file) => (
            <li key={file.url}>
              <Link
                href={file.url}
                className="flex gap-4 rounded-lg bg-black-0 transition-colors duration-150 ease-in-out hover:bg-black-5"
              >
                <span className="rounded-lg border border-black-15 bg-black-10 p-2">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.3333 2.66669H7.99992C7.29267 2.66669 6.6144 2.94764 6.1143 3.44774C5.6142 3.94783 5.33325 4.62611 5.33325 5.33335V26.6667C5.33325 27.3739 5.6142 28.0522 6.1143 28.5523C6.6144 29.0524 7.29267 29.3334 7.99992 29.3334H23.9999C24.7072 29.3334 25.3854 29.0524 25.8855 28.5523C26.3856 28.0522 26.6666 27.3739 26.6666 26.6667V12L17.3333 2.66669Z"
                      fill="white"
                      stroke="#C9C9C9"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17.3333 2.66669V12H26.6666"
                      stroke="#C9C9C9"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <div className="flex min-w-0 flex-1 flex-col py-1">
                  <span className="text-base text-black-100">{file.name}</span>
                  <span className="truncate text-sm text-black-60">
                    {file.url}
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <form>
          <label className="flex cursor-pointer flex-col rounded-lg border border-dashed border-black-20 bg-black-0 py-8 px-12 shadow-sm transition-colors duration-150 ease-in-out hover:border-blue-50">
            <div className="flex flex-col items-center gap-2">
              <input type="file" className="peer hidden" />
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15"
                  stroke="#DEDEDE"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17 8L12 3L7 8"
                  stroke="#DEDEDE"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 3V15"
                  stroke="#DEDEDE"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-base text-black-100">
                <span className="text-blue-50">Browse</span> and upload your
                file
              </span>
              <span className="text-sm text-black-60">
                Your file will be automatically uploaded
              </span>
            </div>
          </label>
        </form>
      </div>
    </div>
  );
}
