import React from "react";
import { motion } from "motion/react";
import resumeData from "../data/resume.json";
import { SpotlightCard } from "./SpotlightCard";
import { DecodeTitle } from "./DecodeTitle";
import { HoverScrambleText } from "./HoverScrambleText";

export const Certifications: React.FC = () => {
  const { certifications } = resumeData;

  return (
    <section id="certifications" className="relative py-24 px-6 sm:px-12 lg:px-24 bg-slate-950/50">
      <div className="max-w-5xl mx-auto w-full z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
            <DecodeTitle text="Certifications" />
          </h2>
          <div className="w-20 h-1 bg-indigo-500 rounded-full" />
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <SpotlightCard className="p-5 flex items-center gap-4 group h-full">
                <div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center shrink-0 group-hover:bg-indigo-500/20 transition-colors">
                  <svg
                    className="w-5 h-5 text-indigo-400 group-hover:text-indigo-300 transition-colors"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <span className="text-slate-200 font-medium leading-snug group-hover:text-white transition-colors">
                  <HoverScrambleText text={cert} />
                </span>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
