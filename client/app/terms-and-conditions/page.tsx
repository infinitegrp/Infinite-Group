import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Terms & Conditions | Infinite Group of Companies",
  description: "Innovating Across Borders | Infinite Group of Companies",
};

const page = () => {
  return (
    <div className="w-full h-full bg-gray-100">
      <div className="max-w-3xl mx-auto py-28 px-4">
        <div className="space-y-6">
          <div className="mb-6">
            <h2 className="text-xl md:text-2xl font-semibold mb-2 text-gray-900">
              Infinite Group of Companies - Terms and Conditions
            </h2>
            <p className="text-gray-600">Effective Date: 01/01/2025</p>
            <p className="mt-4 text-gray-800">
              By accessing or using the website, you agree to these Terms and
              Conditions. If you do not agree, please refrain from using the
              website.
            </p>
          </div>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-gray-900">
              1. Use of Website
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-800">
              <li>
                You agree to use the website for lawful and ethical purposes
                only.
              </li>
              <li>
                You must not misuse the website to disrupt its functionality or
                infringe on others&apos; rights.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-gray-900">
              2. User Content
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-800">
              <li>
                By submitting content (e.g., forms, comments, or applications),
                you grant Infinite Group of Companies, a non-exclusive right to
                use, modify, or display the content for operational purposes.
              </li>
              <li>
                You must ensure that any submitted content is accurate, lawful,
                and does not violate any third-party rights.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-gray-900">
              3. Limitation of Liability
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-800">
              <li>
                Infinite Group of Companies is not liable for any direct,
                indirect, incidental, or consequential damages resulting from
                the use or inability to use our website.
              </li>
              <li>
                While we strive for accuracy, we do not guarantee the
                completeness or reliability of the website&apos;s content.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-gray-900">
              4. Changes to Terms
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-800">
              <li>
                We reserve the right to modify these Terms and Conditions at any
                time.
              </li>
              <li>
                Continued use of the website following any changes indicates
                your acceptance of the updated terms.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-gray-900">
              5. Contact Us
            </h2>
            <p className="text-gray-800">
              If you have questions about these Terms and Conditions, please
              contact us at{" "}
              <a
                href="mailto:info@infinite-grp.com"
                className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 hover:underline"
              >
                info@infinite-grp.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default page;
