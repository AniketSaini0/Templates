import React from "react";
import { CheckCircle, XCircle } from "lucide-react"; // Icons for tick & cross
import { membershipPlans } from "../assets/imageLinks";

export default function MembershipPlans() {
  return (
    <section
      name="Membership-Plans"
      className=" relative py-6 bg-black text-white container mx-auto px-4 md:px-6 w-full max-w-screen-xl"
    >
      <div className="flex flex-col">
        <h2 className="text-3xl tracking-wide font-bold font-mono sm:text-4xl md:text-5xl text-center mb-8">
          PLANS
        </h2>

        {/* Wrapper to enable horizontal scroll on small screens */}
        <div className="overflow-x-auto z-30 sm:overflow-hidden">
          <div className="grid snap-x snap-mandatory scrollbar-hide pb-4 grid-flow-col sm:grid-flow-row grid-cols-[repeat(auto-fill,minmax(300px,1fr))] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 justify-items-stretch">
            {membershipPlans.map((plan, index) => (
              <div
                key={index}
                className="bg-white flex flex-col justify-between shadow-lg p-6 overflow-hidden min-w-[300px] sm:min-w-0"
              >
                <div className="text-center py-2 bg-black px-2">
                  <h3 className="text-2xl text-white font-bold">
                    {plan.title}
                  </h3>
                  <p className="text-md font-semibold font-mono text-gray-300 mt-2">
                    {plan.description}
                  </p>
                </div>
                <p className="text-lg m-auto font-semibold text-gray-600 mt-2">
                  Rs {plan.price}
                </p>
                {/* Features List */}
                <ul className="flex flex-col items-center gap-3 py-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center justify-center w-full border-b border-gray-400 pb-3 gap-2 text-lg text-gray-800"
                    >
                      {feature.included ? (
                        <CheckCircle className="text-green-500 w-5 h-5" />
                      ) : (
                        <XCircle className="text-red-500 w-5 h-5" />
                      )}
                      {feature.name}
                    </li>
                  ))}
                </ul>

                {/* Join Now Button
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mt-4">
                  Join Now
                </button> */}
              </div>
            ))}
          </div>
        </div>
        <div className="absolute -z-20- left-0 bottom-0 min-w-screen min-h-5/6 bg-gradient-to-t from-white via-transparent to-transparent"></div>
      </div>
    </section>
  );
}
