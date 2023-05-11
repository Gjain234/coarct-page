import Image from 'next/image'

import TestimonialImage01 from '@/public/images/testimonial-01.jpg'
import TestimonialImage02 from '@/public/images/testimonial-02.jpg'
import TestimonialImage03 from '@/public/images/testimonial-03.jpg'
import mohit from '@/public/images/mohit.png'
import gauri from '@/public/images/gauri.png'
export default function Testimonials() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">About us</h2>
            <p className="text-xl text-gray-400">We are a small and dynamic team with experience in statistics, economics, engineering and AI, and would love to hear from you if you are interested in trying out Coarct!</p>
          </div>

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-2 lg:gap-6 items-start lg:max-w-none">

            {/* 1st testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <Image className="rounded-full" src={mohit} width={500}  alt="Testimonial 01" />
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">Economics and Statistics PhD Student at MIT.</blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">Mohit Karnani</cite> - <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="https://www.linkedin.com/in/mohitkarnani">LinkedIn</a>
              </div>
            </div>

            {/* 3rd testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="200">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <Image className="rounded-full" src={gauri} width={600}  alt="Testimonial 03" />
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">Computer Science PhD Student at Harvard</blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">Gauri Jain</cite> - <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="https://www.linkedin.com/in/gauri-jain-a3b62812b">LinkedIn</a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
