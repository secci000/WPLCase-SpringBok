import { useState, useEffect, useRef } from "react";
import "../GrillSection.css";
import bunImg from "../assets/home/bun.png";
import pattyImg from "../assets/home/patty.png";
import { GiHamburger } from "react-icons/gi";

function GrillSection() {
  const [grillLevel, setGrillLevel] = useState(0);
  const [isGrilling, setIsGrilling] = useState(false);
  const animationRef = useRef<number | null>(null);

  const startGrilling = () => {
    if (grillLevel === 100 || isGrilling) return;
    setIsGrilling(true);
  };

  useEffect(() => {
    if (!isGrilling) return;

    const duration = 2000;
    const start = performance.now();

    const animate = (time: number) => {
      const progress = Math.min(((time - start) / duration) * 100, 100);
      setGrillLevel(progress);

      if (progress < 100) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setIsGrilling(false);
        cancelAnimationFrame(animationRef.current!);
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [isGrilling]);

  return (
    <section className="hero-section-HeroSectie">
      <img src={bunImg} alt="burger bun" className="hero-bun-HeroSectie" />
      <img src={pattyImg} alt="burger patty" className="hero-patty-HeroSectie" />

      <div className="hero-text-HeroSectie">
        <h1>Flame grilling sinds 1954!</h1>

        <div
          className="grill-circle-container-HeroSectie"
          onClick={startGrilling}
          style={{ cursor: grillLevel === 100 ? "default" : "pointer" }}
        >
          <div
            className="grill-circle-HeroSectie"
            style={{
              background: `conic-gradient(#e74c1b ${grillLevel * 3.6}deg, #fbe9d0 ${grillLevel * 3.6}deg)`,
            }}
          >
            <GiHamburger
              className={`burger-icon-HeroSectie ${isGrilling ? "grilling" : ""}`}
            />
          </div>
        </div>

        {grillLevel < 100 ? (
          <p className="grill-text-HeroSectie">
            {isGrilling
              ? "Je burger wordt gegrild..."
              : "Klik op de burger om te grillen 🍔"}
          </p>
        ) : (
          <button className="discover-btn-HeroSectie">
            Ontdek onze burgers →
          </button>
        )}
      </div>
    </section>
  );
}

export default GrillSection;







