import { WebBundlr } from "@bundlr-network/client";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { BigNumber, ethers } from "ethers";
import fileReaderStream from "filereader-stream";
import Link from "next/link";
import { useEffect, useLayoutEffect, useState } from "react";
import { useProvider, useSigner } from "wagmi";

function useSpace() {
  const [space, setSpace] = useState([]);

  useLayoutEffect(() => {
    const localStorageSpace = localStorage.getItem("space");
    if (localStorageSpace) {
      setSpace(JSON.parse(localStorageSpace));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("space", JSON.stringify(space));
  }, [space]);

  const upload = (name, url) => {
    setSpace((prev) => [
      ...prev,
      {
        name,
        url,
      },
    ]);
  };

  return { space, upload };
}

export default function Home() {
  const { space, upload } = useSpace();

  const provider = useProvider();
  const { data: signer } = useSigner();

  const [fnd, setFnd] = useState("");

  useEffect(() => {
    (async () => {
      if (!provider || !signer) return;
      provider.getSigner = () => signer;

      const bundlr = new WebBundlr(
        "https://devnet.bundlr.network",
        "bnb",
        provider,
        {
          providerUrl: "https://data-seed-prebsc-1-s3.binance.org:8545",
        }
      );

      await bundlr.ready();

      setFnd(await (await bundlr.getLoadedBalance()).toString());
    })();
  }, [provider, signer]);

  const handleFileUpload = async (event) => {
    if (event.target.files) {
      const file = event.target.files[0];

      provider.getSigner = () => signer;

      const bundlr = new WebBundlr(
        "https://devnet.bundlr.network",
        "bnb",
        provider,
        {
          providerUrl: "https://data-seed-prebsc-1-s3.binance.org:8545",
        }
      );

      await bundlr.ready();

      try {
        const tx = await bundlr.upload(fileReaderStream(file), {
          tags: [{ name: "Content-Type", value: file.type }],
        });
        upload(file.name, `https://arweave.net/${tx.id}`);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const [fundAmount, setFundAmount] = useState(0);

  const fundNode = async () => {
    provider.getSigner = () => signer;

    const bundlr = new WebBundlr(
      "https://devnet.bundlr.network",
      "bnb",
      provider,
      {
        providerUrl: "https://data-seed-prebsc-1-s3.binance.org:8545",
      }
    );

    await bundlr.ready();

    const fundAmountParsed = BigNumber.from(
      ethers.utils.parseUnits(fundAmount, 18)
    );

    await bundlr.fund(fundAmountParsed.toString());
  };

  return (
    <div className="min-h-screen bg-black-5">
      <main className="mx-auto flex max-w-xl flex-col gap-4 p-4">
        <nav className="flex justify-end gap-2">
          <span className="flex items-center rounded-lg border border-black-20 bg-black-0 px-2 py-1 text-base text-black-70 shadow-sm">
            {fnd} FND
          </span>
          <ConnectButton label="Sign in" />
        </nav>
        <div className="flex gap-2">
          <label className="group flex flex-1 rounded-lg shadow-sm">
            <span className="rounded-l-lg border-y border-l border-black-20 bg-black-0 py-2 px-3 text-base text-black-60 group-focus-within:border-blue-50">
              FND
            </span>
            <input
              type="number"
              value={fundAmount}
              onChange={(event) => setFundAmount(event.target.value)}
              className="flex-1 rounded-r-lg border border-black-20 bg-black-0 py-2 px-3 text-base text-black-60 placeholder:text-black-40 focus:outline-none group-focus-within:border-y-blue-50 group-focus-within:border-r-blue-50"
              placeholder="0,000"
            />
          </label>
          <button
            type="submit"
            onClick={fundNode}
            className="rounded-lg border border-black-20 bg-black-0 px-4 py-2 text-base font-medium shadow-sm"
          >
            Fund
          </button>
        </div>
        <div>
          <label className="flex cursor-pointer flex-col rounded-lg border border-dashed border-black-20 bg-black-0 py-8 px-12 shadow-sm transition-colors duration-150 ease-in-out hover:border-blue-50">
            <div className="flex flex-col items-center gap-2">
              <input
                onChange={handleFileUpload}
                type="file"
                className="peer hidden"
              />
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
        </div>
        <ul className="flex flex-1 flex-col gap-2 overflow-hidden rounded-lg border border-black-20 bg-black-0 p-4 shadow-sm">
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
      </main>
    </div>
  );
}
