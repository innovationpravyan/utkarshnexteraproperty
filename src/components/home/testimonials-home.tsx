'use client'

import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import {
  ChevronLeft,
  ChevronRight,
  Quote,
  Star,
  PlayCircle,
  Users,
  Award,
} from 'lucide-react'
import Image from 'next/image'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { TESTIMONIALS, Testimonial } from '@/lib/constants'
import YoutubeDialog from './youtube-dialog'

const statItems = [
  {
    value: '4.9/5',
    label: 'Average Rating',
    icon: Star,
  },
  {
    value: '500+',
    label: 'Happy Customers',
    icon: Users,
  },
  {
    value: '98%',
    label: 'Satisfaction Rate',
    icon: Award,
  },
]

export default function TestimonialsHome() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
  }, [emblaApi, onSelect])

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-headline font-bold text-foreground md:text-4xl text-balance">
            What Our Customers Say
          </h2>
          <p className="mt-2 text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
            Real stories from real customers who trusted us with their most
            important investment
          </p>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {TESTIMONIALS.map((testimonial, index) => (
              <div
                key={index}
                className="flex-[0_0_100%] min-w-0"
              >
                <div className="flex justify-center">
                  <Card className="p-6 md:p-8 border-primary/20 shadow-lg max-w-2xl w-full">
                    <CardContent className="p-0">
                      <div className="flex items-center gap-4 mb-4">
                        <Avatar className="h-16 w-16">
                          <AvatarImage
                            src={testimonial.image}
                            alt={testimonial.name}
                          />
                          <AvatarFallback>
                            {testimonial.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="text-lg font-semibold font-headline">
                            {testimonial.name}
                          </h3>
                          <p className="text-muted-foreground">
                            {testimonial.city}
                          </p>
                          <p className="text-primary font-medium">
                            {testimonial.projectType}
                          </p>
                        </div>
                      </div>
                      <div className="flex mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${
                              i < testimonial.rating
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <div className="relative">
                        <Quote className="absolute -top-2 -left-4 h-12 w-12 text-primary/10" />
                        <p className="text-muted-foreground text-balance relative">
                          {testimonial.text}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center gap-4 mt-8">
          <Button
            variant="outline"
            size="icon"
            onClick={scrollPrev}
            className="rounded-full"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <div className="flex items-center gap-2">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === selectedIndex ? 'w-6 bg-primary' : 'w-2 bg-border'
                }`}
              />
            ))}
          </div>
          <Button
            variant="outline"
            size="icon"
            onClick={scrollNext}
            className="rounded-full"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}