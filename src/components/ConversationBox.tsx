import { useState } from "react";

const responses: { [key: string]: string } = {
  "Who are you?":
    "I'm Rhyen — a curious builder, product engineer, and AI enthusiast. ",
  "What do you do?":
    "I specialize in ideation-led product development. My work blends research, and Full-Stack Web development.",
  "What are your hobbies?":
    "Outside of work, I love playing sports like basketball and volleyball",
};

const FlipCard = ({
  front,
  back,
  isFlipped,
  onClick,
}: {
  front: string;
  back: string;
  isFlipped: boolean;
  onClick: () => void;
}) => {
  return (
    <div className="w-64 h-40 perspective cursor-pointer" onClick={onClick}>
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style preserve-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front */}
        <div className="absolute w-full h-full bg-white border border-gray-200 rounded-xl shadow-md flex items-center justify-center text-lg font-semibold backface-hidden">
          {front}
        </div>

        {/* Back */}
        <div className="absolute w-full h-full bg-pink-100 border border-pink-200 rounded-xl shadow-inner px-4 py-3 text-sm text-gray-700 flex items-center justify-center text-center rotate-y-180 backface-hidden">
          {back}
        </div>
      </div>
    </div>
  );
};

const ConversationBox = () => {
  const [flippedCard, setFlippedCard] = useState<string | null>(null);

  return (
    <div className="w-full max-w-3xl mx-auto p-8 bg-pink-50/40 border border-pink-100 rounded-2xl shadow-lg text-center">
      <h2 className="text-xl font-semibold mb-6 text-pink-600">
        Curious about me? Flip a card to find out ✨
      </h2>

      <div className="flex flex-wrap justify-center gap-6">
        {Object.entries(responses).map(([question, answer]) => (
          <FlipCard
            key={question}
            front={question}
            back={answer}
            isFlipped={flippedCard === question}
            onClick={() =>
              setFlippedCard((prev) => (prev === question ? null : question))
            }
          />
        ))}
      </div>
    </div>
  );
};

export default ConversationBox;
