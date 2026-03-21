import { Pause, Play } from "lucide-react";
import { useState } from "react";
import DecryptedText from "./components/DecryptedText";
import Dither from "./components/Dither";

function App() {
	const [paused, setPaused] = useState(false);

	return (
		<div className="relative min-h-screen bg-gray-950 text-gray-100">
			<div className="absolute inset-0">
				<Dither
					waveColor={[0.5, 0.5, 0.5]}
					disableAnimation={paused}
					enableMouseInteraction={false}
					colorNum={4}
					waveAmplitude={0.4}
					waveFrequency={4}
					waveSpeed={0.03}
				/>
			</div>
			<div className="relative z-10 flex min-h-screen flex-col items-center justify-center">
				<h1 className="text-7xl font-bold">
					<DecryptedText text="nacal.io" animateOn="inViewHover" speed={90} />
				</h1>
				<p className="mt-1 text-lg tracking-[0.3em] text-gray-200">Under development.</p>
			</div>
			<button
				type="button"
				onClick={() => setPaused((p) => !p)}
				aria-label={paused ? "Play animation" : "Pause animation"}
				className="fixed bottom-6 right-6 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-gray-900/80 text-gray-300 backdrop-blur transition hover:bg-gray-800"
			>
				{paused ? <Play size={16} /> : <Pause size={16} />}
			</button>
		</div>
	);
}

export default App;
