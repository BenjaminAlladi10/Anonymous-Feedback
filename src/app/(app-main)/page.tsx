"use client";
import React from 'react';

import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import messages from "@/carouselMessages.json";
import { Mail } from 'lucide-react';

export default function page() {
  return (
    <div>
      <main className="flex-grow flex flex-col items-center justify-center px-4 md:px-24 py-12 bg-gray-800 text-white">
        <section className="text-center mb-8 md:mb-12">
          <h1 className="text-2xl md:text-5xl font-bold">
            Dive into the World of Anonymous Feedback
          </h1>

          <p className="mt-3 md:mt-4 text-base md:text-lg">
            True Feedback - Where your identity remains a secret.
          </p>
        </section>

        {/* Carousel for Messages */}
        <Carousel plugins={[Autoplay({delay:2000})]} className="w-full max-w-lg md:max-w-xl pb-12">
          <CarouselContent>
            {
              messages.map((message, index)=>(
                <CarouselItem key={index} className="p-4">
                  <Card>
                    <CardHeader>{message.title}</CardHeader>

                    <CardContent className="flex flex-col md:flex-row items-start space-y-2 md:space-y-0 md:space-x-4">
                      <Mail className="flex-shrink-0"/>
                      <div>
                        <p>{message.content}</p>
                        <p className="text-xs text-muted-foreground">
                          {message.received}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))
            }
          </CarouselContent>
        </Carousel>
      </main>

      {/* Footer */}
      <footer className="text-center p-4 md:p-6 bg-gray-900 text-white">
        © 2024 Anonymous Feedback. All rights reserved.
      </footer>

    </div>
  )
}
