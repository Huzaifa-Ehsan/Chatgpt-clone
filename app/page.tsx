import {
  SunIcon,
  BoltIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-white px-2">
      <h1 className="text-5xl font-bold mb-20">ChatGPT</h1>
      <div className="flex text-center space-x-2">
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <SunIcon className="h-8 w-8" />
            <h2>Examples</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">{`"What is JavaScript?"`}</p>
            <p className="infoText">{`"Write a note on React."`}</p>
            <p className="infoText">{`"Which are the famous backend languages?"`}</p>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <BoltIcon className="h-8 w-8" />
            <h2>Capabilities</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">{`"Remembers what user said earlier in the conversation"`}</p>
            <p className="infoText">{`"Allows user to provide follow-up corrections"`}</p>
            <p className="infoText">{`"Trained to decline inappropriate requests"`}</p>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <ExclamationTriangleIcon className="h-8 w-8" />
            <h2>Limitations</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">{`"May occasionally generate incorrect information"`}</p>
            <p className="infoText">{`"May occasionally produce harmful instructions or biased content"`}</p>
            <p className="infoText">{`"Limited knowledge of world and events after 2021"`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
