import React from "react";
import Image from "next/image";
import Container from "@/components/common/Container";
import FullContainer from "@/components/common/FullContainer";
import QuoteForm from "@/components/common/QuoteForm";

import {
  Clock,
  Star,
  Shield,
  Award,
  Trophy,
  ThumbsUp,
  Phone,
  FileText,
  MessageSquare,
} from "lucide-react";

export default function Banner({ image, data, form_head, features, niche }) {
  const iconMap = {
    Clock,
    Star,
    Shield,
    Award,
    Trophy,
    ThumbsUp,
    Phone,
    FileText,
    MessageSquare,
  };

  return (
    <FullContainer className="relative bg-white overflow-hidden min-h-[600px] md:min-h-[790px]">
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <Image
          src={image}
          title={data?.imageTitle || data?.title || "Banner"}
          alt={data?.altImage || data?.tagline || "No Banner Found"}
          priority={true}
          fill
          sizes="100vw"
          className="object-cover object-center"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gray-950/70"></div>
      </div>

      <Container className="py-10 md:py-20 font-barlow relative z-10">
        <div className="w-full grid grid-cols-1 md:grid-cols-banner gap-2 md:gap-[66px] text-white">
          <div className="relative flex flex-col justify-center text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 md:pl-0">
              <div
                className={`${
                  data?.price !== "Free Estimate"
                    ? "text-6xl md:text-8xl h-32 md:h-36 w-32 md:w-36 rounded-full"
                    : "text-2xl text-center drop-shadow-lg uppercase font-poppins h-20 w-32 md:h-24 md:w-44 rounded-full"
                } font-bold aspect-square flex items-center justify-center bg-gradient-to-br from-blue-800 via-sky-500 from-20% to-green-400`}
              >
                {data?.price !== "Free Estimate" && (
                  <sup className="text-3xl">$</sup>
                )}
                {data?.price !== "Free Estimate" ? (
                  data?.price || "89"
                ) : (
                  <span className="flex items-center gap-2 relative">
                    <Star className="w-3 h-3 text-white/50 absolute top-0 left-0" />{" "}
                    Free <br /> Estimate
                  </span>
                )}
              </div>
            </div>

            {niche?.toLowerCase()?.replaceAll("-", " ") !==
              "carpet cleaning" && (
              <p className="text-xl md:text-3xl font-semibold mt-3 text-white">
                Special Complete Inspection
              </p>
            )}

            <h1 className="font-[900] uppercase text-4xl mt-3 md:text-6xl leading-tight text-shadow-lg">
              {data?.title}
            </h1>
            <h2 className="text-3xl md:text-6xl uppercase font-[900] leading-tight text-white mt-2">
              {data?.tagline}
            </h2>
            <p className="text-lg md:text-3xl mb-1">{data?.description}</p>

            <ul className="mb-9 space-y-1 md:space-y-2 mx-auto md:mx-0">
              {(Array.isArray(features) ? features : [])?.map(
                (feature, idx) => {
                  const IconComponent = iconMap[feature.icon];
                  return (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-white font-medium text-base md:text-[17px]"
                    >
                      {IconComponent && (
                        <IconComponent className="w-5 h-5 text-white" />
                      )}
                      {feature.text}
                    </li>
                  );
                }
              )}
            </ul>
          </div>

          <div
            className="flex flex-col justify-center px-3"
            id="quote-form-section"
          >
            <QuoteForm
              data={data}
              form_head={form_head}
              showArrowInButton={false}
            />
          </div>
        </div>
      </Container>
    </FullContainer>
  );
}
