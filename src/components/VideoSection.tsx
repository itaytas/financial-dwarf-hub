
import React from 'react';
import { PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

interface VideoSectionProps {
  videoId?: string;
}

const VideoSection: React.FC<VideoSectionProps> = ({ videoId = "sMRxz5GP9n0" }) => {
  const [isPlaying, setIsPlaying] = React.useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">איך אנחנו עוזרים לך לקבל את הכסף שמגיע לך</h2>
          <p className="text-xl text-gray-600 mb-10">
            צפה בסרטון הקצר שלנו כדי להבין איך הגמד הפיננסי עוזר לאלפי ישראלים לקבל בחזרה אלפי שקלים מרשויות המס
          </p>
          
          <div className="relative rounded-xl overflow-hidden shadow-xl">
            {!isPlaying ? (
              <div className="relative">
                <img 
                  src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`} 
                  alt="סרטון הדרכה של הגמד הפיננסי"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <button 
                    onClick={handlePlay}
                    className="transform transition-transform duration-300 hover:scale-110 focus:outline-none"
                    aria-label="Play video"
                  >
                    <PlayCircle className="h-20 w-20 text-white" />
                  </button>
                </div>
              </div>
            ) : (
              <div className="relative pb-[56.25%] h-0">
                <iframe 
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                  title="YouTube video player" 
                  className="absolute top-0 left-0 w-full h-full" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>
          
          <div className="mt-8">
            <Link 
              to="/how-it-works" 
              className="text-brand-blue font-medium hover:underline"
            >
              למד עוד על התהליך שלנו
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
