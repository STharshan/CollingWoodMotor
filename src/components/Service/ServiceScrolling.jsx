import React from "react";

const testimonials = [
  {
    quote:
      "My daughters clutch went on her car.  Simon went above and beyond to take the stress out of the situation.  He collected the car, it was repaired in super quick time and at a very good price.  A really decent bloke who I will definitely use again and can highly recommend. 5* service, thank you",
    author: "Penny Beyless",
  },
  {
    quote:
      "Best garage for repairs, servicing and MOT in Leicester without a doubt. Knowledgeable mechanics who wont rip you off, fair prices. Always a warm welcome and efficient service from Simon... highly recommend",
    author: "Nick Nesbit",
  },
  {
    quote:
      "Very impressed by customer care. Two really nice lads. Quoted  at more than we paid them. Strived  to keep the cost down. Will definitely  deal with this garage again.",
    author: "Susan Glover",
  },
  {
    quote:
      "Thank you Collingwood Motors for fixing our horse-box problem. It was a very stressful day with a horse needing urgent medical care and Collingwood saved the day. Thank you.",
    author: "Joe Ferguson",
  },
  {
    quote:
      "Thank you for the work on my 4x4,finally I have a garage I can trust.i will always take my cars to you from now on,top marks",
    author: "Ady Smith"
  },
  {
    quote:
      "I had a breakdown and these guys helped me out. Anyone who had a breakdown will understand the pain my pain and the help one requires at that time! Thanks to these guys, my car was sorted and I was back on the road!",
    author: "shailesh mishr"
  },
  {
    quote:
      "Excellent service and won't rip you off. Simon and Craig are top mechanics with lots of years experience between them",
    author: "Matthew Leboutillier"
  },
  {
    quote:
      "Absolutely amazing garage. Staff go out of their way to help & their late opening times absolutely saved my bank holiday! couldn't recommend this garage enough.",
    author: "Heledd Davies"
  },
  {
    quote:
      "The team at Collingwood motors are great, welcoming and professional, only gatage I will use and recommend. 5*",
    author: "Stephen Key"
  },
  {
    quote:
      "I have used Collingwood motors for the last few years and always had great service. I had to have my car recovered recently due to breaking down and Simon had my car fixed and back on the road within a few hours and even lent me his coat as I had to hang around in the rain. I can not recommend this place enough!",
    author: "Emma Allen"
  },
];

const ServiceScrolling = () => {
  return (
    <section className="bg-neutral-900 py-16 overflow-hidden transition-colors">
      <div className="w-[200%] animate-scroll flex space-x-6">
        {[...testimonials, ...testimonials].map((t, index) => (
          <div
            key={index}
            className="min-w-[300px] sm:min-w-[350px] md:min-w-[400px] 
            bg-white dark:bg-black text-black dark:text-white 
            p-6 rounded shadow-md transition-colors"
          >
            <p className="text-sm mb-4">"{t.quote}"</p>
            <p className="font-bold text-sm uppercase">{t.author}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">Google Reviews</p>
          </div>
        ))}
      </div>
      {/* Animation style */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default ServiceScrolling;
